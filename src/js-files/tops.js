import React from "react";
import "../css-files/tops.css"

export default function Tops(props) {
    return (
        <>
            <div id={!props.transition ? 'tops' : 'tops off'}>

            </div>
        </>
    )
}