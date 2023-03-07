import React, {useState} from "react";
import Acoustic from "./acoustic";
import '../css-files/construction.css';
import arrow_down from '../assets/svg/arrow-down.svg'

export default function Construction(props) {
    let [transition, setTransition] = useState(false);
	let [page, setPage] = useState(1);

    function nextPage(index) {
		setTransition(false);
		setTimeout(() => {
			setTransition(true);
			setPage(index);
		}, 500);
	}

    return (
        <>
            <div id={!props.transition ? 'construction' : "construction off"}>
                <div className="arrow-left"><img src={arrow_down}/></div>
                {page === 1 && <Acoustic transition={false}/>}
                <div className="arrow-right"><img src={arrow_down}/></div>
            </div>
        </>
    )
}