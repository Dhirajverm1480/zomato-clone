import React from "react";
import Logo from "../assets/icon/Logo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="page-frame flex-between items-center">
        <a href="#" className="w-28">
          <img src={Logo} alt="Logo" />
        </a>
        <div className="hidden sm:block rounded-lg shadow-sm p-2">
          <input
            type="search"
            placeholder="Choose your Current Location"
            className="w-64 text-lg border-r mr-4 outline-none"
          />
          {/* <span className="footer-a pb-1"> | </span> */}
          <input
            type="search"
            placeholder="Search for restaurant, cuisine or a dish"
            className="w-80 text-lg outline-none"
          />
        </div>
        <div className="flex-between gap-7">
          <NavLink to={"/login"}>
            <p className="text-[#696969]">Log in</p>
          </NavLink>
          <NavLink to={"/sign-up"}>
            <p className="text-[#696969]">Sign Up</p>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
