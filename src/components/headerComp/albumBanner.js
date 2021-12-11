import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./albumAnimation.css"

export default function HeaderView(props){
    const [inProp, setInProp] = useState(false);
    /*
    i tried animating the preview image of the album, but setting in prop in this
    function breaks everything. also, for some reason, onClick by itself 
    "onClick={() => setInProp(true)} doesn't work whatsoever. kinda funny
    */
    const test = () => {
        //console.log("weweawewwe");
        //setInProp(!inProp);
    }
    //console.log(inProp);

    return (
    <div className="bannerArea">
        <CSSTransition in={inProp} timeout={6000} className="selectedAl">
            <img 
                onClick={test()}
                className="selectedAl" 
                height="200" 
                width="200" 
                src={props.selectedAl.cover} 
            />
        </CSSTransition>

        <div className="generalInfo">
            <h1>{props.selectedAl.aTitle}</h1>
            <p><b>total runtime</b> - {props.selectedAl.runTime}</p>
            <p><b>amount of tracks</b> - {props.selectedAl.totalTracks}</p>
        </div>
    </div>
    )
}