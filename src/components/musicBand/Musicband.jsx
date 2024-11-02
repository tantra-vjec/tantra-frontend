import React, { useRef, useEffect, useState } from "react";
import bandGif from "../../assets/music_band/music.gif";
import date from "../../assets/music_band/date.webp";
import bg from "../../assets/music_band/bg.png";

function MusicBand() {
  const [gifInView, setGifInView] = useState(false);
  const [dateInView, setDateInView] = useState(false);
  const gifRef = useRef(null);
  const dateRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setGifInView(entry.isIntersecting),
      { threshold: 0.5 } // Trigger when 50% of the GIF is in view
    );

    const dateObserver = new IntersectionObserver(
      ([entry]) => setDateInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (gifRef.current) observer.observe(gifRef.current);
    if (dateRef.current) dateObserver.observe(dateRef.current);

    return () => {
      if (gifRef.current) observer.unobserve(gifRef.current);
      if (dateRef.current) dateObserver.unobserve(dateRef.current);
    };
  }, []);

  return (
    <div className="bg-[#107800] box-border w-full h-screen flex items-center justify-center relative">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
          .font-arcade_classic {
            font-family: 'Press Start 2P', cursive;
          }
          @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-slideUp {
            animation: slideUp 1s ease-out forwards;
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
        `}
      </style>
      <div className="w-[85%] my-[10%] items-center flex flex-col max-h-[90%]">
        <p className="font-arcade_classic text-left mb-2 sm:text-sm md:text-xl">
          VALLOPALLY HALL
        </p>
        <div
          className="w-fit h-fit bg-center relative"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            ref={gifRef}
            src={bandGif}
            alt="Animated Band"
            className={`w-full object-contain ${gifInView ? "animate-fadeIn" : ""}`}
          />
        </div>
        <img
          ref={dateRef}
          src={date}
          alt="Event Date"
          className={`sm:bottom-[4%] bottom-[34%] w-[17%] absolute ${
            dateInView ? "animate-slideUp" : ""
          }`}
        />
      </div>
    </div>
  );
}

export default MusicBand;