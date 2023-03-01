import React from "react";
import '../css-files/home.css'
import acoustic from '../assets/png/acoustic.png'
import classic from '../assets/png/classic.png'
import electric from '../assets/png/electric.png'
import arrow_down from '../assets/svg/arrow-down.svg'

export default function Home(props) {
	return (
		<>
			<div id={props.transition ? 'home' : 'home off'}>
				<div className="images">
					<div className="img1">
						<img src={acoustic} alt="" />
					</div>
					<div className="img2">
						<img src={classic} alt="" />
					</div>
					<div className="img3">
						<img src={electric} alt="" />
					</div>
				</div>
				<p className="txt1">
					tot ce trebuie <br />
					<b>să ști</b>
				</p>
				<p className="txt2">
					despre <br />
					<b>chitări.</b>
				</p>
			</div>
		</>
	);
}
