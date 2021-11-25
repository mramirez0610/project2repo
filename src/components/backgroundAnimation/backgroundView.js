import React from "react";
import Typewriter from "typewriter-effect";
import "./background.css"

export default function BackgroundView(props){
    const q = props.selectedAl.trackList;
    const trackLog = JSON.stringify(q);

    return <div className="console">
        <Typewriter 
            onInit={(typewriter) => {
                typewriter.changeDelay(25)
                .typeString(`${trackLog}`)
                .start()
            }}
        />
    </div>
}