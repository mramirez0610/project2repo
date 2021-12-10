import React, { useState, useEffect } from "react";
import AlbumView from "../dataComp/albumView";
import TrackListing from "../listComp/trackListing"
import DescriptionView from "../dataComp/descView";
import HeaderView from "../headerComp/albumBanner";
import BackgroundView from "../backgroundAnimation/backgroundView";
import MusicPlayer from "../playerComp/musicPlayer";
import "./style.css"
import "./weird.css"

// jumps up so high that i comicallay crash my head through the ceiling
export default function MusicView() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [albums, setAlbums] = useState([]);  
  const [selectedSong, setSelectedSong] = useState({});
  const [selectedAl, setSelectedAl] = useState([]);
  const selectedTracklist = selectedAl.trackList;

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
          albums = {albums}
        />

        <div className="albumChoice area">
          <b><u><p>album choice:</p></u></b>
          <AlbumView 
            albums={albums}
            onSelect={(id) => {
              albumSelected(id);
            }}
          />
        </div>

        <div className="main">  
          <div className = "actualHeader">
            <HeaderView 
              selectedAl = {selectedAl}
            />
          </div>

          <div className="musicCol">
            <TrackListing
              isLoaded = {isLoaded}
              selectedAl = {selectedAl}
              songSelected = {songSelected}
            /> 
            <DescriptionView 
              selectedAl = {selectedAl}
            />
          </div>

          <MusicPlayer
            selectedSong = {selectedSong}
          />
        </div>
      </div>
    );
  }
  
  function albumSelected(id){
    const foundAlbum = albums.find((album) => album.id === id);
    setSelectedAl(foundAlbum);
  }

  function songSelected(id){
    const foundSong = selectedTracklist.find((tracklist) => tracklist.songId === id);
    setSelectedSong(foundSong);
  }
}
