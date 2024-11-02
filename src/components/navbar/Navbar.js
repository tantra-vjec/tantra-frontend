import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import ir from "./icon_real.png";
import inv from "./invert.png";
import navm from "./nav_menu.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
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

  const handleEventsClick = (path) => {
    navToggle();
    if (location.pathname !== "/") {
      // Navigate to home page first if not already there
      navigate("/");
      // Use a slight delay to scroll after navigation completes
      setTimeout(() => {
        document.getElementById(path)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // If already on the home page, scroll directly
      document.getElementById(path)?.scrollIntoView({ behavior: "smooth" });
    }
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
          <a className="link-items arca" href="/">
            <h1>HOME</h1>
          </a>
          <a
            className="link-items arca"
            onClick={() => handleEventsClick("events")}
          >
            <h1>EVENTS</h1>
          </a>
          <a className="link-items arca" href="/">
            <h1>COMPETITION</h1>
          </a>
          <a
            className="link-items arca"
            onClick={() => handleEventsClick("footer")}
          >
            <h1>CONTACT US</h1>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
