import React from "react";
import "../css-files/tops.css"
import guitar from '../assets/png/epiphone.png'
import guitar2 from '../assets/png/Gibson.png'
import guitar3 from '../assets/png/Yamaha.png'

export default function Tops(props) {
    return (
        <>
            <div id="top">
                <h1 className="head">RECOMANDATIONS</h1>
                <div className="beginner">
                    <h1>EPIPHONE DR-100</h1>
                    <img src={guitar}/>
                    <p>The most beginner friendly guitar for the good quality build and low price.</p>
                </div>
                <div className="friends">
                    <h1>GIBSON G-45</h1>
                    <img src={guitar2}/>
                    <p>The guitar you need when you go out with your friends.</p>
                </div>
                <div className="overall">
                    <h1>YAMAHA FG-800</h1>
                    <img src={guitar3}/>
                    <p>The best guitar overall.</p>
                </div>
            </div>
        </>
    )
}