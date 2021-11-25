import React, { useState, useEffect } from "react";
import AlbumView from "../dataComp/albumView";
import TrackListing from "../listComp/trackListing"
import DescriptionView from "../dataComp/descView";
import HeaderView from "../headerComp/albumBanner";
import "./style.css"
import BackgroundView from "../backgroundAnimation/backgroundView";

// jumps up so high that i comicallay crash my head through the ceiling
export default function MusicView() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [selectedAl, setSelectedAl] = useState([])
  
  useEffect(() => {
    fetch("data/listOfAlbums.json")
      .then((res) => res.json())
      .then((data) => {
        //assigns our data from json into an actual variable
        setAlbums(data);  
        setSelectedAl(data[0]);
        setIsLoaded(true);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
      );
  }, []);

  if(error) {
    return <div className="main">error</div>
  } 
  else if(!isLoaded) {
    return <div className="main"></div>
  } else {
    return (
      <div>
        <BackgroundView 
            selectedAl = {selectedAl}
          />
        <div className="main">
          
          <div className = "actualHeader">
            <HeaderView 
              selectedAl = {selectedAl}
            />
          </div>
          <div className="musicCol">
            <div>
              <TrackListing
                isLoaded = {isLoaded}
                selectedAl = {selectedAl}
              />
            </div>
            <div className="descBox">
              <DescriptionView 
                selectedAl = {selectedAl}
              />
            </div>
          </div>
      
          <div className="albumChoice">
            <AlbumView 
              albums={albums}
              onSelect={(id) => {
                albumSelected(id);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
  

  function albumSelected(id){
    const foundAlbum = albums.find((album) => album.id === id);

    setSelectedAl(foundAlbum);
  }
}
