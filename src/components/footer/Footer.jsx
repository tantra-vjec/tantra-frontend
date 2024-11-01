import React from "react";
import image from "../../assets/footer/nintento.png"; // Ensure this path is correct
import "./Footer.css"; // Ensure to import the CSS file

function Footer() {
  return (
    <div className="w-full h-fit flex bg-[#bec0bfff]">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
          .font-arcade_classic {
            font-family: 'Press Start 2P', cursive;
          }
        `}
      </style>
      <div className="w-full md:w-1/2 mx-auto relative">
        <img src={image} className="w-full h-fit" alt="foot" />
        <div className="absolute font-arcade_classic top-0 left-[5%] w-[90%] px-[3%] py-[15%] box-border flex justify-between">
          <div className="flex flex-col gap-2 text-white font-semibold text-xs sm:text-sm md:text-lg">
            <a style={{ color: "#A3FF5C" }}>HOME</a>
            <a>EVENTS</a>
          </div>
          <div className="text-white w-full md:w-[60%] lg:w-[50%] text-right text-[8px] text-sm-custom sm:text-sm md:text-sm lg:text-lg">
            <p className="leading-tight">
              State Highway 59, Jyothi Nagar, Kannur District, Chemperi, Kerala
              670632
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
