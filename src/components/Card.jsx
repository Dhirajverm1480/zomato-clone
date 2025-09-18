import React from "react";
import Bugger from "../assets/img/image4.png";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Link className="relative border rounded p-1 w-80">
      <img src={Bugger} alt="" />
      <span className="absolute top-0 right-2 text-color text-4xl">+</span>
      <div className="py-2 px-1 gap-4 flex">
        <div>
          <h2 className="text-lg font-bold">Bugger</h2>
          <span className="text-sm">⭐⭐⭐⭐⭐</span>
        </div>
        <button className="border text-lg w-full bg-[#e47814] text-white hover:bg-white hover:text-[#e47814] hover:border-[#e47814] rounded">
          Buy
        </button>
      </div>
    </Link>
  );
};

export default Card;
