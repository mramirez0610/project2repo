import React, { useState, useEffect } from "react";

export default function DescriptionView(props){
    let alDescription = props.albums.map((album) =>(
        <div
            className = "description"
            key ={album.id}
        >
            {album.description}
        </div>
    ));
    return <div>{alDescription}</div>
}