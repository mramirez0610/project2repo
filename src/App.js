import React from "react";
import AlbumView from "./components/albumView";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="main">
        <h1>sup marco</h1>
        <h2>Start editing to see some magic happen</h2>
        <p>testing out computer commits</p>
        <p>looks like they work!</p>
        <AlbumView />
        {/* 
        
        questions to ask:

        -are mui core / material the same?
        
        -why does it return an empty array first?
             - should i do the same thing as in my calendar?

        */}
      </div>
    </div>
  );
}
