import React from "react";
import "../style.css";

function Note(props){
    return(
        <div class="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default Note;