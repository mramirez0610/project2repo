import React, {useState, useEffect} from "react";

export default function AlbumView(props){
    
    let albumList = props.albums.map((album) => (
        <div
            key={album.id}
            onClick={() =>{
                props.onSelect(album.id)
            }}
        >
            <img width="100" height="100" src={album.cover}/>
        </div>
    ));
    
    return <div>{albumList}</div>
}