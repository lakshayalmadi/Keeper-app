import React from "react";
import "../style.css";

var date = new Date();
var year = date.getFullYear();

function Footer(){
    return(
        <footer>
            <p><strong>Copyright © {year}</strong></p>
        </footer>
    )
}

export default Footer;