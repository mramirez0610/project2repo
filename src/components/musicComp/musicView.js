import React, { useState, useEffect } from "react";
import AlbumView from "./albumView";
import TrackListing from "./trackListing"

export default function MusicView() {
  const [albums, setAlbums] = useState([]);
  const [selectAl, setSelectAl] = useState({})

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
    <AlbumView 
      albums={albums}
      cover={albums.cover}
      onSelect={(id) => {
        albumSelected(id);
      }}
    />
    <TrackListing />
  </div>
  );

  function albumSelected(id){
    const foundAlbum = albums.find((album) => album.id === id);

    setSelectAl(foundAlbum);

    console.log(selectAl);
  }
}
