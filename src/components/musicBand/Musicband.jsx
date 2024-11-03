import React, { useRef, useEffect, useState } from "react";
import bandGif from "../../assets/music_band/music.gif";
import date from "../../assets/music_band/date.webp";
import bg from "../../assets/music_band/bg.png";

import mobilBg from "../../assets/music_band/music band back mobile.png";
import green_1 from "../../assets/music_band/rounded colored 1.svg";
import musicFile from "../../assets/music_band/music.mp3"; // Import your audio file


function MusicBand() {
  const [gifInView, setGifInView] = useState(false);
  const [dateInView, setDateInView] = useState(false);
  const gifRef = useRef(null);
  const dateRef = useRef(null);


  useEffect(() => {
    // Create an audio instance
    const audio = new Audio(musicFile);
    audio.loop = true;
    audio.volume = 0.5;

    // Function to play audio on user interaction
    const playMusic = () => {
      audio.play().catch((error) => {
        console.error("Playback failed:", error);
      });

      // Remove the event listener after the audio starts
      window.removeEventListener("click", playMusic);
      window.removeEventListener("keydown", playMusic);
    };

    // Add event listeners for user interaction
    window.addEventListener("click", playMusic);
    window.addEventListener("keydown", playMusic);

    // Cleanup function to remove event listeners if component unmounts
    return () => {
      window.removeEventListener("click", playMusic);
      window.removeEventListener("keydown", playMusic);
    };
  }, []);

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


      <h2 className="text-white font-arcade_classic text-xl md:text-3xl pt-8 md:pt-16 mb-5 mt-20 md:mt-24">
        VALLOPALLY HALL
      </h2>

      <div className="relative flex justify-center items-center w-full lg:max-w-[90%] lg:mt-4 mt-4">
        <div className="absolute inset-0 flex justify-center items-center z-0 select-none">
          <img
            src={isMobile ? mobilBg : bg}
            alt="MUSIC BAND"
            className="w-full h-auto"
          />
        </div>
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