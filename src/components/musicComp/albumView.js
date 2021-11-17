import React, {useState, useEffect} from "react";

export default function AlbumView(props){
    /* 
    little bit of an issue here -- the area of the photos click region is kinda funky.
    either look into <map> or <area>. these seem like they could help
    */
    let albumList = props.albums.map((album) => (
        <div
            className = "img"
            key={album.id}
            onClick={() =>{
                props.onSelect(album.id)
            }}
        >
            <img width="100" height="100" src={album.cover}/>
        </div>
        //
        /* what is the advantage of using map over a regular div?
        <map
            key={album.id}
            onClick={() =>{
                props.onSelect(album.id)
            }}
        >
            <img width="100" height="100" src={album.cover}/>
        </map>
        */
    ));
    
    return <div>{albumList}</div>
}