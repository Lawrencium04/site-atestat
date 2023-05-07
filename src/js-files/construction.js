import React, {useState} from "react";
import '../css-files/construction.css';
import Guitar from '../assets/png/Guitar.png'
import GuitarHeadstock from '../assets/png/GuitarHeadstock.png'
import GuitarNeck from '../assets/png/GuitarNeck.png'
import GuitarBody from '../assets/png/GuitarBody.png'
import arrowLeft from '../assets/png/arrow-left.png'
import arrowRight from '../assets/png/arrow-right.png'

export default function Construction(props) {
    const images = [Guitar, GuitarBody, GuitarNeck, GuitarHeadstock]
    const titles = ["Acoustic Guitars", "The body", "The neck", "The headstock"]
    const descriptions = ["An acoustic guitar is a musical instrument that produces sound by plucking or strumming the strings. The strings vibrate and create sound waves that are amplified by the hollow body of the guitar.\n\nAcoustic guitars are usually made of wood and have six strings, but there are also variations with different numbers and types of strings.", 
    "The body of an acoustic guitar is the part that resonates the sound of the strings. It consists of a top, also called the soundboard, a back and sides, and a sound hole. The top is usually made of spruce or cedar wood, while the back and sides can be made of various types of wood, such as mahogany, rosewood, or maple.\n\nThe sound hole is a circular opening on the top that allows the sound waves to escape and amplify. The body of an acoustic guitar also has a bridge, where the strings are attached, and a saddle, which supports the strings and transfers their vibrations to the top.", 
    "The neck of an acoustic guitar is the long, thin part that connects the body and the headstock. The neck has a curved shape called the fretboard, which has metal strips called frets.\n\nThe frets divide the fretboard into different notes. The strings run along the neck and are held in place by the nut at the top and the bridge at the bottom. The neck of an acoustic guitar affects the sound quality, playability and comfort of the instrument.", 
    "The headstock of an acoustic guitar is the part that holds the tuning machines, which adjust the tension of the strings. The headstock also displays the logo of the guitar maker and may have some decorative features.\n\nThe headstock can be straight, tilted, or scarfed, depending on how it is attached to the neck. The headstock affects the tone and sustain of the guitar by changing the angle and pressure of the strings over the nut."]
    
    const [part, setPart] = useState(0);

    return (
        <>
            <div id="structure">
            <img id={part != 0 ? "arrL" : "arrL disabled"} src={arrowLeft} onClick = {() => {
                if(part > 0)
                    setPart(part-1);
            }}/>
                <img className="guitar" src={images[part]}/>
                <div className="info">
                    <h1>{titles[part]}</h1>
                    <p>{descriptions[part]}</p>
                </div>
            <img id={part != 3 ? "arrR" : "arrR disabled"} src={arrowRight} onClick = {() => {
                if(part < 3)
                    setPart(part+1);
            }}/>
            </div>
        </>
    )
}