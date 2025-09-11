import React from "react";
import Logo from "../assets/icon/Logo.png";
import PlayStore from "../assets/brand/PlayStore.png";
import AppStore from "../assets/brand/AppStore.png";

const Footer = () => {
  return (
    <footer className="page-frame bg-gray-50">
      <div className="flex-between">
        <img src={Logo} alt="logo" className="w-32" />
        <div className="flex-between gap-7">
          <div className="dropdown">India</div>
          <div className="dropdown">Einglish</div>
        </div>
      </div>
      <section className="flex-between border-b">
        <div className="flex flex-col py-6">
          <h2 className="font-bold text-xl mb-3">ABOUT ZOMATO</h2>
          <a href="#" className="text-[#696969] text-sm font-sans my-1">
            Who we are
          </a>
          <a href="#" className="text-[#696969] text-sm font-sans my-1">
            Blog
          </a>
          <a href="#" className="text-[#696969] text-sm font-sans my-1">
            Work With Us
          </a>
          <a href="#" className="text-[#696969] text-sm font-sans my-1">
            Investor Relations
          </a>
          <a href="#" className="text-[#696969] text-sm font-sans my-1">
            Report Fraud
          </a>
          <a href="#" className="text-[#696969] text-sm font-sans my-1">
            Press Kit
          </a>
          <a href="#" className="text-[#696969] text-sm font-sans my-1">
            Contact Us
          </a>
        </div>
        <div className="flex flex-col py-6">
          <h2 className="font-bold text-xl mb-3">ZOMAVERSE</h2>
          <a href="#" className="text-[#696969] text-sm font-sans my-1">
            Zomato
          </a>
          <a href="#" className="text-[#696969] text-sm font-sans my-1">
            Blinkit
          </a>
          <a href="#" className="text-[#696969] text-sm font-sans my-1">
            District
          </a>
          <a href="#" className="text-[#696969] text-sm font-sans my-1">
            Feeding India
          </a>
          <a href="#" className="text-[#696969] text-sm font-sans my-1">
            Hyperpure
          </a>
          <a href="#" className="text-[#696969] text-sm font-sans my-1">
            Zomato Live
          </a>
          <a href="#" className="text-[#696969] text-sm font-sans my-1">
            Zomaland
          </a>
          <a href="#" className="text-[#696969] text-sm font-sans my-1">
            Weather Union
          </a>
        </div>
        <div className="flex flex-col py-6">
          <h2 className="font-bold text-xl mb-3">FOR RESTAURANTS</h2>
          <a href="#" className="text-[#696969] text-sm font-sans my-1">
            Partner With Us
          </a>
          <a href="#" className="text-[#696969] text-sm font-sans my-1">
            App For You
          </a>
        </div>
        <div className="flex flex-col py-6">
          <h2 className="font-bold text-xl mb-3">LEARN MORE</h2>
          <a href="#" className="text-[#696969] text-sm font-sans my-1">
            Privacy
          </a>
          <a href="#" className="text-[#696969] text-sm font-sans my-1">
            Security
          </a>
          <a href="#" className="text-[#696969] text-sm font-sans my-1">
            Terms
          </a>
        </div>
        <div className="flex flex-col py-6">
          <h2 className="font-bold text-xl mb-3">SOCIAL LINKS</h2>
          <a href="#" className="text-[#696969] text-sm font-sans my-1">
            Who we are
          </a>
          <a href="#" className="text-[#696969] text-sm font-sans my-1">
            Blog
          </a>
          <div>
            <a href="#">
              <img src={PlayStore} alt="playstore" className="w-32 my-2" />
            </a>
            <a href="#">
              <img src={AppStore} alt="AppStore" className="w-32" />
            </a>
          </div>
        </div>
      </section>
      <p className="text-[#696969] text-sm font-sans my-1 py-3">
        By continuing past this page, you agree to our Terms of Service, Cookie
        Policy, Privacy Policy and Content Policies. All trademarks are
        properties of their respective owners. 2008-2025 © Zomato™ Ltd. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
