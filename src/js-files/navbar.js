import React, { useState } from 'react';
import '../css-files/navbar.css';
import logo from '../assets/svg/Logo.svg';
import icon from '../assets/png/menu.png'
import { Link } from 'react-scroll';

export default function Navbar(props) {
    const [index, setIndex] = useState(1);
    const [menuName, setMenuName] = useState('Navbar');

    function changePage(index) {
        setIndex(index);
    }

    function handleMenuButton() {
        if (menuName === "Navbar")
            setMenuName("Navbar mobile")
        else
            setMenuName("Navbar")
    }

    return (
        <>
            <div className={menuName} id="myNavBar">
            <img className="logo" src={logo} alt=''/>
            <ul className="links" id="Links">
                <NavButton id={1} index={index} scrollTo="home" onClick={() => changePage(1)} label="HOME"/>
                <NavButton id={2} index={index} scrollTo="structure" onClick={() => changePage(2)} label="STRUCTURE"/>
                <NavButton id={3} index={index} scrollTo="top" onClick={() => changePage(3)} label="RECOMMENDATIONS"/>
            </ul>
            <div href="/" className="icon" onClick={handleMenuButton}>
                <img src={icon} alt=""/>
            </div>
            </div>
        </>
    );
}

function NavButton(props) {
    let name = "";
    if (props.index === props.id)
        name = "active"
    else
        name = "";

    return (
        <li>
            <Link activeClass='active' spy to={props.scrollTo}>
                {props.label}
            </Link>
        </li>   
    )
}