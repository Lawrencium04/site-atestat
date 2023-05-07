import React from "react";
import '../css-files/home.css'
import background from "../assets/png/BackgroundImg.png"

export default function Home(props) {
	return (
		<>
			<div id="home">
				<img className="background" src={background}></img>
				<div className="shadow"></div>
				<div className="title"><h>„Where words <b>fail</b>, music <b>speaks</b>.”</h><p>- Hans Christian Andersen</p></div>
			</div>
		</>
	);
}
