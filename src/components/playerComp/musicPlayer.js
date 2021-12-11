import React, { useRef } from "react";
import Typewriter from "typewriter-effect";
import "./audio.css";

export default function MusicPlayer(props){
    const aRef = useRef();
    const currentSong = props.selectedSong.url
    const songTitle = props.selectedSong.songTitle
    const curAlbum = props.selectedAl.aTitle

    /* 
    genuinely don't understand how i got this working but i did woooo!!!! i did every
    piece of this animation myself since there's not much documentation over 
    typewriter-effect -- nonetheless man im happy

    the console says that "euuugh comparing a value to itself is pointless euugh" 
    but literally bro if the songTitle === songTitle wasn't there this whole thing
    wouldn't re-render eat shit console
    */

    const NeatTrick = () => {if(songTitle === songTitle) return(
        <Typewriter
            options={{
                delay: 1, 
                strings: `${songTitle}`, 
                autoStart:true
            }}
        />
    )};

    return (
        <div className="audioArea">
            <audio
                controls
                ref={aRef}
                src={currentSong}
                className="audioPlayer"
            ></audio>
            <div>
                <p><b>now playing:</b></p>
                <NeatTrick/>
            </div>
        </div>
    )
}