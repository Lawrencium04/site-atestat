import React from "react";
import '../css-files/home.css'
import acoustic from '../assets/png/acoustic.png'
import classic from '../assets/png/classic.png'
import electric from '../assets/png/electric.png'
import arrow_down from '../assets/svg/arrow-down.svg'

export default function Home(props) {
	return (
		<>
			<div id={!props.transition ? 'home' : 'home off'}>
				<div className="images">
						<img className="g-ac" src={acoustic} alt="" />
						<img className="g-cl" src={classic} alt="" />
						<img className="g-el" src={electric} alt="" />
				</div>
				<p className="txt1">
					<b>tot ce trebuie</b>
					să ști
				</p>
				<p className="txt2">
					despre
					<b>chitări.</b>
				</p>
			</div>
		</>
	);
}
