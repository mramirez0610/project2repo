import React from "react";
import "./background.css"

export default function BackgroundView(props){
    const what = props.selectedAl.trackList
    const what2 = JSON.stringify(what)

    return <div className="test">{what2}</div>
}