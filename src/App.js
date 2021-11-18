import React from "react";
import MusicView from "./components/musicComp/musicView";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="main">
        {/* delete this div if you don't need it*/}
        <div className="componentArea">
          <MusicView />
          {/* 
          
          questions to ask:

          -are mui core / material the same?
          
          -it for some reason is one click behind when it reads data.

          */}
        </div>
      </div>
    </div>
  );
}
