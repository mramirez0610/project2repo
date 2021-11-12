import React, { useState, useEffect } from "react";

export default function AlbumView() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("data/listOfAlbums.json")
      .then((res) => res.json())
      .then((data) => {
        //assigns our data from json into an actual variable
        setAlbums(data);  
      });
  }, []);

  console.log(albums);
  return <div> </div>;
}
