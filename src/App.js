import React from "react";
import MusicView from "./components/musicComp/musicView";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="main">
        <h1>sup marco</h1>
        <h2>Start editing to see some magic happen</h2>
        <p>testing out computer commits</p>
        <p>looks like they work!</p>
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
