import React from "react";
import Typewriter from "typewriter-effect";
import "./background.css"

export default function BackgroundView(props){
    const fullType = [];

    for(let u = 0; u < props.albums.length; u++){
        const f = JSON.stringify(props.albums[u].trackList);
        const s = JSON.stringify(props.albums[u].trackList);
        fullType.push(f, s);
    }

    return <div className="console">
        <Typewriter 
            options={{
                delay: .02,
                deleteSpeed: 2,
                strings: `${fullType}`,
                autoStart: true,
                loop: true,
                wrapperClassName: "wrapper",
            }}
        />
    </div>
}