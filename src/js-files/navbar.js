import React, { useState } from 'react';
import '../css-files/navbar.css';
import logo from '../assets/svg/logo.svg';
import icon from '../assets/png/menu.png'

export default function Navbar(props) {
    const [index, setIndex] = useState(1);
    const [menuName, setMenuName] = useState('Navbar');

    function changePage(index) {
        setIndex(index);
        props.setPage(index);
        setTimeout(() => {
            if (menuName === 'Navbar mobile')
                setMenuName('Navbar')
        }, 350)
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
                <NavButton id={1} index={index} onClick={() => changePage(1)} label="ACASĂ"/>
                <NavButton id={2} index={index} onClick={() => changePage(2)} label="CONSTRUCȚIE"/>
                <NavButton id={3} index={index} onClick={() => changePage(3)} label="TOPURI"/>
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
        <li className={name} onClick={props.onClick}>
            {props.label}
        </li>   
    )
}