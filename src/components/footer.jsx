import React from "react";
import "../style.css";

var date = new Date();
var year = date.getFullYear();

function Footer(){
    return(
        <div className="footer">
            <p><strong>Copyright © {year}</strong></p>
        </div>
    )
}

export default Footer;