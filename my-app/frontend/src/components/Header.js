import "./Header.css"
import logo from '../assets/images/file.png'
import React, { useState } from 'react';

function Header(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className='nav-bar'>
            <p className="logo"><img src = {logo} alt="Company logo" height = "40" /></p>

            <div className="hamburger" onClick={toggleMenu}>Menu</div>

            <ul className={isOpen ? "open" : ""}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Header;

