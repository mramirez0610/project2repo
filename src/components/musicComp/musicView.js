import React, { useState, useEffect } from "react";
import AlbumView from "./albumView";
import TrackListing from "./trackListing"
import DescriptionView from "./descView";
import "./playerStyle.css"

export default function MusicView() {
  const [albums, setAlbums] = useState([]);
  const [selectedAl, setSelectedAl] = useState({})

  useEffect(() => {
    fetch("data/listOfAlbums.json")
      .then((res) => res.json())
      .then((data) => {
        //assigns our data from json into an actual variable
        setAlbums(data);  
      });
  }, []);

  return (
  <div>
    <div className="musicCol">
      <TrackListing
        selectedAl = {selectedAl}
      />
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
  );

  function albumSelected(id){
    const foundAlbum = albums.find((album) => album.id === id);

    setSelectedAl(foundAlbum);

    console.log(selectedAl.trackList);
  }
}
