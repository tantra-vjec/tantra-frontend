// Poster.js
import React from "react";
import { useMediaQuery } from "react-responsive";
import Desktop from "../../assets/bg/des.png";
import Mobile from "../../assets/bg/mob.png";
import crtImage from "../../assets/crt_land.png";
import BouncingGame from "../BouncingGame/BouncingGame";

import "./Poster.css";

function Poster() {
  let isMobileDevice = useMediaQuery({
    query: "(max-device-width: 500px)",
  });

  return (
    <div className="fill">
      <div className="img-container fade-up">
        <img src={crtImage} className="svg-logo" alt="crt image" />
        <div className="bouncing-game-container">
          <BouncingGame />
        </div>
      </div>
    </div>
  );
}

export default Poster;
