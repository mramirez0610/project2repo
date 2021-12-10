import React from "react";

export default function DescriptionView(props){
    
    return (
    <div className="descBox">
        <p>{props.selectedAl.description}</p>
    </div>
    )
}