import React from "react";

export default function AlbumView(props){
    /* 
    little bit of an issue here -- the area of the photos click region is kinda funky.
    either look into <map> or <area>. these seem like they could help
    */
    const AlbumList = props.albums.map((album) => (
        <div
            className = "previewImg"
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
    
    return <div>{AlbumList}</div>
}