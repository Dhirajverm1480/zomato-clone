import React from "react";
import Bugger from "../assets/img/image4.png";

const Banner = () => {
  return (
    <div className="w-full rounded border bg-[#ae6827] flex-center rounded-md">
      <img src={Bugger} alt="Bugger" className="w-[30%]" />
      <div>
        <h1 className="text-white text-xl xl:text-[8vh] font-sans font-bold mb-5">
          India First Fastest Food Service
        </h1>
        <p className="hidden xl:block text-white text-sm xl:text-xl">The Place of where you find your Favorite Mile. </p>
      </div>
    </div>
  );
};

export default Banner;
