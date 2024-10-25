import React, { useState } from "react";
import CARDGROUP from "../../assets/cards/front.svg";
import DRAGON from "../../assets/cards/dragon.png";
import INNER_BOX from "../../assets/cards/frame.svg";
import PHONE from "../../assets/cards/phone.svg";
import BUTTON from "../../assets/cards/button.svg";
import BACK from "../../assets/cards/back.svg";

const GameCard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const { name, time, venue, department, contact, desc, co_ord } = props.data;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-96 h-[450px] mx-auto [perspective:1000px]">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
          .font-arcade_classic {
            font-family: 'Press Start 2P', cursive;
          }
          .font-montserrat {
            font-family: 'Montserrat', sans-serif;
            font-weight: 500; /* Adjust this value as needed */
            font-size: 18px;
          }
        `}
      </style>
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front Face */}
        <div
          className="relative inset-0 h-full [backface-visibility:hidden] [transform:rotateY(0deg)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={CARDGROUP}
            alt="Card Group"
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
          <img
            src={DRAGON}
            alt="Dragon"
            className="absolute top-[33%] left-[49%] w-[79%] h-[50%] z-20 transform -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src={INNER_BOX}
            alt="Inner Box"
            className="absolute top-[48%] left-[49%] w-[90%] h-[90%] z-30 object-cover transform -translate-x-1/2 -translate-y-1/2"
          />

          <div className="relative w-[75%] h-[100%] top-[60%] left-[52%] text-white font-arcade_classic text-2xl z-40 transform -translate-x-1/2 -translate-y-1/2">
            {name}
          </div>

          <div className="absolute top-[64%] left-[29%] text-white font-arcade_classic text-xl z-40 transform -translate-x-1/2 -translate-y-1/2">
            {time}
          </div>

          <button>
            <img
              src={PHONE}
              alt="Phone"
              className={`absolute bottom-[8%] right-[14%] w-[21%] h-[20%] z-40 transition-opacity duration-300 ${
                isFlipped ? "opacity-0" : "opacity-100"
              }`}
            />
          </button>

          <button
            onClick={handleFlip}
            className="absolute bottom-[-17%] left-[33%] transform -translate-x-1/2 z-50 w-[80%] h-[80%] transition-transform duration-300 hover:scale-105"
          >
            <img
              src={BUTTON}
              alt="Inspect Button"
              className="w-full h-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center text-black font-arcade_classic text-lg">
              INSPECT
            </span>
          </button>

          <button
            onClick={handleFlip}
            className="absolute bottom-[-30%] left-[33%] transform -translate-x-1/2 z-50 w-[80%] h-[80%] transition-transform duration-300 hover:scale-105"
          >
            <img
              src={BUTTON}
              alt="Register Button"
              className="w-full h-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center text-black font-arcade_classic text-lg">
              REGISTER
            </span>
          </button>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={{ backfaceVisibility: "hidden" }}
          onClick={handleFlip}
        >
          <img
            src={BACK}
            alt="Back Face"
            className="absolute inset-0 w-full h-full object-cover z-10"
          />

          <div className="absolute top-[11%] left-[50%] w-[90%] flex flex-col text-white font-arcade_classic text-xs z-40 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex justify-between w-full">
              <div className="flex-1 ml-8 mr-4 overflow-hidden text-ellipsis">
                {" "}
                {/* Added left margin */}
                {co_ord}
              </div>{" "}
              {/* Left aligned name */}
              <div className="whitespace-nowrap mr-5">{contact}</div>{" "}
              {/* Right aligned contact */}
            </div>
          </div>

          {/* Combined Name and Description */}
          <div className="absolute top-[35%] left-[53%] w-[80%] z-40 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-white">
            <div
              className="font-arcade_classic text-xl"
              style={{
                textShadow:
                  "2px 1px 0px black, -2px -1px 0px black, 2px -1px 0px black, -2px 1px 0px black",
              }}
            >
              {name}
            </div>
            <div className="font-montserrat  mt-1">{desc}</div>
          </div>

          <div className="absolute top-[55%] left-[50%] w-full h-px bg-white z-40 transform -translate-x-1/2" />

          {/* Combined Name and Description */}
          <div className="absolute top-[64%] left-[53%] w-[80%] z-40 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-white">
            <div className="font-arcade_classic text-[11px]">{venue}</div>
            <div className=" font-arcade_classic text-xl font-bold mt-1">
              {department}
            </div>
          </div>
          <button
            className={`absolute bottom-[-17%] left-[37%] object-cover transform -translate-x-1/2 z-50 w-full h-[80%] transition-transform duration-300 hover:scale-105 ${
              isFlipped ? "opacity-100" : "opacity-100"
            }`}
          >
            <img
              src={BUTTON}
              alt="Flip Back Button"
              className="w-full h-full"
            />
            <span className="absolute inset-0 flex items-center justify-center text-black font-arcade_classic text-lg">
              REGISTER
            </span>
          </button>
          <button>
            <img
              src={PHONE}
              alt="Phone"
              className={`absolute bottom-[10%] right-[10%] w-[20%] h-[20%] z-40 transition-opacity duration-300 ${
                isFlipped ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
