import React, { useState } from 'react'
import guitar from '../assets/png/const_acoustic.png'
import guitar_notes from '../assets/png/const_acoustic_det.png'
import '../css-files/acoustic.css'

export default function Acoustic(props) {
	let [selected, setSelectet] = useState(0);
	let [name, setName] = useState("acoustic");

	function selectPart(nr) {
		console.log(nr + " " + selected)
		if (nr === selected) {
			setName('acoustic')
			setSelectet(0);
			return;
		}
		setSelectet(nr);

		setName('acoustic selected');
	}

  return (
    <div className={!props.transition ? name : 'acoustic off'}>
		<div className="title">
			<b>acustică.</b>
		</div>
		<div className="guitar">
			<img className="pic" src={guitar} alt="" />
			<span className="body-select" onClick={() => selectPart(1)}></span>
			<span className="neck-select" onClick={() => console.log("neck")}></span>
			<span className="headstock-select"></span>
		</div>
		<div className="body-desc">
		</div>
	</div>
  )
}