import React, { useEffect, useState } from "react";
import bandGif from "../../assets/music_band/music.gif";
import date from "../../assets/music_band/date.webp";
import bg from "../../assets/music_band/bg.png";
import mobilBg from "../../assets/music_band/music band back mobile.png";
import green_1 from "../../assets/music_band/rounded colored 1.svg";

function MusicBand() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#107800] pt-5 md:min-h-screen">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
          .font-arcade_classic {
            font-family: 'Press Start 2P', cursive;
          }
        `}
      </style>

      {/* Extra space above VALLOPALLY HALL */}
      <h2 className="text-white font-arcade_classic text-xl md:text-3xl pt-8 md:pt-16 mb-5 mt-20 md:mt-24">
        VALLOPALLY HALL
      </h2>

      {/* Main content container */}
      <div className="relative flex justify-center items-center w-full lg:max-w-[90%] lg:mt-4 mt-4">
        {/* Background image based on screen size */}
        <div className="absolute inset-0 flex justify-center items-center z-0 select-none">
          <img
            src={isMobile ? mobilBg : bg}
            alt="MUSIC BAND"
            className="w-full h-auto"
          />
        </div>

        {/* Animated GIF of band members with conditional size */}
        <div
          className={`relative z-10 w-full lg:my-4 my-4 ${
            isMobile ? "scale-125" : "scale-100"
          } transition-transform`}
        >
          <img src={bandGif} alt="Band Members" className="w-full h-auto" />
        </div>
      </div>

      {/* Date button */}
      <img
        src={date}
        className="mt-8 lg:mt-4 w-1/2 md:w-1/3 lg:w-1/4 px-6 py-3 text-black text-lg font-bold rounded-lg active:scale-95 transition transform"
        alt="Date"
      />

      {/* Full-width images without side margins */}
      <div className="w-screen mt-8 lg:mt-4 p-0 m-0 mb-0">
        {" "}
        {/* Set mb-0 to eliminate bottom margin */}
        <img src={green_1} alt="Image 1" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default MusicBand;
