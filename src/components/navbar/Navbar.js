import React, { useState } from "react";
import "./Navbar.css";
import ir from "./icon_real.png";
import inv from "./invert.png";
import navm from "./nav_menu.png";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [closeBtnSrc, setCloseBtnSrc] = useState(ir);

  const navToggle = () => {
    setNavOpen(!navOpen);
  };

  const changeSrcInvert = () => {
    setCloseBtnSrc(inv);
  };

  const changeSrcReal = () => {
    setCloseBtnSrc(ir);
  };

  return (
    <header>
      <nav className="nav">
        <div className="menu-and-logo cursor-pointer">
          <img id="nav-btn" src={navm} alt="Menu" onClick={navToggle} />
        </div>
      </nav>
      <div className={`nav-drop ${navOpen ? "toggle" : ""}`}>
        <div className="nav-close-btn"></div>
        <div className="nav-cont">
          <div className="close-btn cursor-pointer">
            <img
              id="close-btn-btn"
              src={closeBtnSrc}
              alt="Close"
              onClick={navToggle}
              onMouseEnter={changeSrcInvert}
              onMouseLeave={changeSrcReal}
            />
          </div>
          <a className="link-items" href="/">
            <h1>HOME</h1>
          </a>
          <a className="link-items" href="/">
            <h1>EVENTS</h1>
          </a>
          <a className="link-items" href="/">
            <h1>COMPETITION</h1>
          </a>
          <a className="link-items" href="/">
            <h1>CONTACT US</h1>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
