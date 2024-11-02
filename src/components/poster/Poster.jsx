// Poster.js
import React from "react";
import { useMediaQuery } from "react-responsive";
import Desktop from "../../assets/bg/des.png";
import crtImage from "../../assets/crt_land.png";
import BouncingGame from "../BouncingGame/BouncingGame";

import "./Poster.css";

function Poster() {
  let isMobileDevice = useMediaQuery({
    query: "(max-device-width: 500px)",
  });

  return (
    <div className="fill">
      <div className="img-container fade-up max-sm:pb-60">
        <img
          src={crtImage}
          className="svg-logo max-sm:scale-75"
          alt="crt image"
        />
        <div className="bouncing-game-container">
          <BouncingGame />
        </div>
      </div>
    </div>
  );
}

export default Poster;
