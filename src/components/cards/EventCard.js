import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "./Cards.css";
import Arrow from "../../assets/icons/Arrow.svg";

const DepCard = () => {
    useEffect(() => {
        const link = document.createElement("link");
        link.href = "https://fonts.cdnfonts.com/css/arcade-classic";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }, []);

    return (
        <div className="body">
            <div className="container">
                <div className="dep-card">
                    <div className="sec-cont">
                        <img id="gif" src="/nav/mechtrans_.gif" alt="" />
                        <h3 className="dep-name">DEPARTMENT OF MECHANICAL ENGINEERING</h3>
                    </div>
                    <img className="main-card" src="/nav/depcardmech.svg" alt="" />
                    <img src="/nav/arrowpixel.svg" alt="" id="arrow" />
                </div>
            </div>
        </div>
    );
};

export default DepCard;
