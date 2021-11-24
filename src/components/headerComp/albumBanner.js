import React from "react";

export default function HeaderView(props){
    return (
    <div className="bannerArea">
        <img className="selectedImg" height="200" width="200" src={props.selectedAl.cover} />
        <div className="generalInfo">
            <h1>{props.selectedAl.aTitle}</h1>
            <p><b>total runtime</b> - {props.selectedAl.runTime}</p>
            <p><b>amount of tracks</b> - {props.selectedAl.totalTracks}</p>
        </div>
    </div>
    )
}