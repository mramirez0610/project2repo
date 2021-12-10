import React, { useRef } from "react";
import "./audio.css"

export default function MusicPlayer(props){
    const aRef = useRef();
    const currentSong = props.selectedSong.url
    const songTitle = props.selectedSong.songTitle

    return (
        <div className="audioArea">
            <audio
                controls
                ref={aRef}
                src={currentSong}
                className="audioPlayer"
            ></audio>
            <div>
                <p>now playing: {songTitle}</p>
            </div>
        </div>
    )
}