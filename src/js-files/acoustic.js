import React from 'react'
import guitar from '../assets/png/const_acoustic.png'
import guitar_notes from '../assets/png/const_acoustic_det.png'
import '../css-files/acoustic.css'

export default function Acoustic(props) {
  return (
    <div id="acoustic">
		<div className="title">
			<b>acustică.</b>
		</div>
		<div className="guitar">
			<img className="pic" src={guitar} alt="" />
			<img
				className="pic-notes"
				src={guitar_notes}
				alt=""
			/>
		</div>
	</div>
  )
}