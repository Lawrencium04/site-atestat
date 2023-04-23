import React from "react";
import "../css-files/tops.css"
import Strat from "../assets/png/electric.png"

export default function Tops(props) {
    return (
        <>
            <div id={!props.transition ? 'tops' : 'tops off'}>
                <div className="title"><p><b>Topuri ale chitărilor</b> <br></br> în funcție de diferite caracteristici.</p></div>
                <div className="top shape">
                    <p>FORMĂ</p>
                    <ol>
                        <li>Fender Stratocaster</li>
                        <li>Fender Telecaster</li>
                        <li>Gibson Les Paul</li>
                        <li>Superstrat</li>
                        <li>Gibson SG</li>
                        <li>Gibson Flying V</li>
                        <li>Gibson Jaguar</li>
                    </ol>
                </div>
                <div className="top model">
                <p>MODEL</p>
                    <ol>
                        <li></li>
                    </ol>
                </div>
                <div className="top brand">
                <p>BRAND</p>
                    <ol>
                        <li></li>
                    </ol>
                </div>
                <div className="top-bought">Număru curent de chitări achiziționate este de ... chitări.</div>
            </div>
        </>
    )
}