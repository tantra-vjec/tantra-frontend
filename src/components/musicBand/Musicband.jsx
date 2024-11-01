import React from "react";
import bandGif from "../../assets/music_band/music.gif";
import date from "../../assets/music_band/date.webp";
import bg from "../../assets/music_band/bg.png";

function MusicBand() {
  return (
    <div className="bg-[#107800] box-border w-full h-screen flex items-center justify-center relative">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
          .font-arcade_classic {
            font-family: 'Press Start 2P', cursive;
          }
        `}
      </style>
      <div className="w-[85%] my-[10%]  items-center flex flex-col max-h-[90%] ">
        <p className="font-arcade_classic text-left  mb-2 sm:text-sm md:text-xl ">
          VALLOPALLY HALL
        </p>
        <div
          className="w-fit h-fit bg-center relative"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "contain", // Ensures the image fits within the div, zoomed out
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
          }}
        >
          <img
            src={bandGif}
            alt="Animated Band"
            className="w-full object-contain"
          />
        </div>
        <img
          src={date}
          alt="Animated Band"
          className="sm:bottom-[4%] bottom-[34%] w-[17%] absolute"
        />
      </div>
    </div>
  );
}

export default MusicBand;
