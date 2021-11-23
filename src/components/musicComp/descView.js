import React, { useState, useEffect } from "react";

export default function DescriptionView(props){
    return (
    <div className="description">
        <p><b> description: </b></p>
        {props.selectedAl.description}
    </div>)
}