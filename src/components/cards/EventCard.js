import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cards.css";
import Arrow from "../../assets/icons/Arrow.svg";
import mecht from "../../assets/nav/mechtrans_.gif";
import depmech from "../../assets/nav/depcardmech.svg";
import arr from "../../assets/nav/arrowpixel.svg";

const DepCard = (props) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.cdnfonts.com/css/arcade-classic";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  let navigate = useNavigate();

  return (
    <div
      className="cursor-pointer event-container"
      onClick={() => navigate(props.explore)}
    >
      <div className="dep-card">
        <div className="sec-cont">
          <img id="gif" src={mecht} alt="" />
          <h3 className="dep-name">{props.title}</h3>
        </div>
        <img className="main-card" src={depmech} alt="" />
        <img src={arr} alt="" id="arrow" />
      </div>
    </div>
  );
};

export default DepCard;
