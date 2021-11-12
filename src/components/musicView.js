import React, { useState, useEffect } from "react";
import TrackListing from "./trackListing"

export default function MusicView() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("data/listOfAlbums.json")
      .then((res) => res.json())
      .then((data) => {
        //assigns our data from json into an actual variable
        setAlbums(data);  
      });
  }, []);

  return (<div><TrackListing /></div>);
}
