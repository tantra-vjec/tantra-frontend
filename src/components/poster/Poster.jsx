import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import crtImage from "../../assets/crt_land.png";
import BouncingGame from "../BouncingGame/BouncingGame";
import "./Poster.css";

function Poster() {
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 500px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const scrolled = window.scrollY;
      const triggerPoint = vh * 0.25; // 25vh trigger point
      
      if (scrolled >= triggerPoint) {
        console.log('Reached 25vh!');
        document.querySelector('.img-container').classList.add('scale-on-scroll');
      } else {
        document.querySelector('.img-container').classList.remove('scale-on-scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fill">
      <div className="img-container fade-up max-sm:pb-60">
        <img
          src={crtImage}
          className="svg-logo max-sm:scale-75"
          alt="crt image"
        />\
        <div className="bouncing-game-container">
          <BouncingGame />
        </div>
      </div>
    </div>
  );
}

export default Poster;