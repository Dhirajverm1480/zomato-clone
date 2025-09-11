import React from "react";
import Logo from "../assets/icon/Logo.png";

const NavBar = () => {
  return (
    <header>
      <nav className="page-frame flex-between items-center">
        <a href="#" className="w-28">
          <img src={Logo} alt="Logo" />
        </a>
        <div>
          <input
            type="search"
            placeholder="Search for restaurant, cuisine or a dish"
            className="shadow-md p-2 text-lg"
          />
        </div>
        <div className="flex-between gap-7">
          <div>
            <p>Log in</p>
          </div>
          <div>Sign Up</div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
