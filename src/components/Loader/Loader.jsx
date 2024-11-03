// Loader.js
import React, { useEffect, useState } from "react";
// import "./Loader.css";

const assets = [
  require("../../assets/music_band/music.gif"),
  require("../../assets/music_band/date.webp"),
  require("../../assets/music_band/bg.png"),
  require("../../assets/music_band/music band back mobile.png"),
  require("../../assets/music_band/rounded colored 1.svg"),
];

const Loader = ({ onLoadComplete }) => {
  const [loading, setLoading] = useState(0);
  let loadedImages = 0;

  useEffect(() => {
    const images = document.querySelectorAll("img");
    //let loadedImages = 0;

    images.forEach((img) => {
      if (img.complete) {
        loadedImages += 1;
        console.log("Loaded", loadedImages);
      } else {
        img.onload = () => {
          loadedImages += 1;
          if (loadedImages === images.length) {
            setLoading(false);
          }
        };
      }
    });

    if (loadedImages === images.length) {
      setLoading(false);
    }
  }, []);

  const progress = Math.round((loadedImages / assets.length) * 150);

  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading... {progress}%</p>
    </div>
  );
};

export default Loader;
