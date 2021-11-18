import React, { useState, useEffect } from "react";

export default function DescriptionView(props){
    return (
    <div className="description">
        <p> description: </p>
        {props.selectedAl.description}
    </div>)
}