// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const navToggle = () => {
        setNavOpen(!navOpen);
    };

    const changeSrcInvert = () => {
        document.getElementById("close-btn-btn").src = "nav/invert.png";
    };

    const changeSrcReal = () => {
        document.getElementById("close-btn-btn").src = "nav/icon_real.png";
    };

    return (
        <header>
            <nav className="nav">
                <div className="menu-and-logo">
                    <img id="nav-btn" src="/nav/nav_menu.png" alt="Menu" onClick={navToggle} />
                </div>
            </nav>
            <div className={`nav-drop ${navOpen ? 'toggle' : ''}`}>
                <div className="nav-close-btn"></div>
                <div className="nav-cont">
                    <div className="close-btn">
                        <img
                            id="close-btn-btn"
                            src="/nav/icon_real.png"
                            alt="Close"
                            onClick={navToggle}
                            onMouseEnter={changeSrcInvert}
                            onMouseLeave={changeSrcReal}
                        />
                    </div>
                    <div className="link-items"><h1>HOME</h1></div>
                    <div className="link-items"><h1>EVENTS</h1></div>
                    <div className="link-items"><h1>COMPETITION</h1></div>
                    <div className="link-items"><h1>CONTACT US</h1></div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

