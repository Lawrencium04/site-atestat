import React from "react";
import "../css-files/tops.css"
import guitar from '../assets/png/Guitar.png'

export default function Tops(props) {
    return (
        <>
            <div id="top">
                <div className="beginner">
                    <h1>EPIPHONE DR-100</h1>
                    <img src={guitar}/>
                    <p>The most beginner friendly guitar for it's good quality build and low price.</p>
                </div>
                <div className="friends">
                    <h1>TITLE2</h1>
                    <img src={guitar}/>
                    <p>The guitar you need when you go out with your friends.</p>
                </div>
                <div className="overall">
                    <h1>TITLE3</h1>
                    <img src={guitar}/>
                    <p>The best guitar overall.</p>
                </div>
            </div>
        </>
    )
}