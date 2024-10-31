import React from "react";
import image from "../../assets/footer/nintento.png"; // Make sure this path is correct

function Footer() {
  return (
    <div className="w-screen bg-[#bec0bf] flex">
      <img src={image} alt="foot" className="md:w-1/2 w-full mx-auto"/>
    </div>
  );
}

export default Footer;
