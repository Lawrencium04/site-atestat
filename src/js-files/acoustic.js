import React, { useState } from 'react'
import guitar from '../assets/png/const_acoustic.png'
import guitar_notes from '../assets/png/const_acoustic_det.png'
import '../css-files/acoustic.css'

export default function Acoustic(props) {
	let [selected, setSelectet] = useState(0);

	function selectPart(nr) {
		if (nr === selected) {
			setSelectet(0);
			return;
		}
		setSelectet(nr);

	}

  return (
    <div className={!props.transition ? 'acoustic' : 'acoustic off'}>
		<div className="title">
			<b>acustică.</b>
		</div>
		<div className="guitar">
			<img className="pic" src={guitar} alt="" />
			<span className={selected === 1 ? "body-select selected" : "body-select"} onClick={() => selectPart(1)}></span>
			<span className={selected === 2 ? "neck-select selected" : "neck-select"} onClick={() => selectPart(2)}></span>
			<span className={selected === 3 ? "headstock-select selected" : "headstock-select"} onClick={() => selectPart(3)} ></span>
		</div>
		<div className="body-desc">
			{selected === 0 && <p>selectează o <b>componentă</b> pentru a afișa <b>informații.</b></p>}
			{selected === 1 && <p><b>Corpul chitarei</b> este o cutie rezonantă formată din <b>blatură</b> (partea superioară), <b>spate</b> și <b>laterale</b>, realizată în general din lemn masiv. Blatura conține punțile și găurile de sunet, iar spatele reflectă și amplifică sunetul. <b>Forma</b> și <b>dimensiunile</b> corpului pot influența sunetul și există mai multe variante disponibile, precum dreadnought, jumbo, concert, auditorium sau parlor.</p>}
			{selected === 2 && <p><b>Gâtul chitarei</b> este partea lungă și subțire care susține tastatura și se extinde de la corpul chitarei. Este de obicei construit din lemn dur și poate avea o formă plată sau rotunjită. <b>Tastatura</b> este o placă de lemn așezată pe partea superioară a gâtului, care conține fante pentru fiecare dintre corzi și puncte de referință pentru chitariști. Lungimea și forma gâtului chitarei variază în funcție de modelul instrumentului.</p>}
			{selected === 3 && <p><b>Headstock-ul</b> chitarei este partea de la capătul gâtului care conține mecanismele de acordaj ale corzilor și este decorat cu ornamente. Este important nu doar pentru aspectul estetic al chitarei, ci și pentru funcționalitatea sa, permițând chitaristului să <b>ajusteze tensiunea corzilor</b>.</p>}
		</div>
	</div>
  )
}