import React from "react";
import Logo from "../assets/icon/Logo.png";
import PlayStore from "../assets/brand/PlayStore.png";
import AppStore from "../assets/brand/AppStore.png";

const Footer = () => {
  return (
    <footer className="page-frame bg-gray-50">
      <div className="flex-between py-3">
        <img src={Logo} alt="logo" className="w-32" />
        <div className="flex-between gap-7">
          <div className="dropdown">India</div>
          <div className="dropdown">Einglish</div>
        </div>
      </div>
      <section className="flex-between flex-wrap border-b">
        <div className="flex flex-col py-6">
          <h2 className="footer-heading">ABOUT ZOMATO</h2>
          <a href="#" className="footer-a">
            Who we are
          </a>
          <a href="#" className="footer-a">
            Blog
          </a>
          <a href="#" className="footer-a">
            Work With Us
          </a>
          <a href="#" className="footer-a">
            Investor Relations
          </a>
          <a href="#" className="footer-a">
            Report Fraud
          </a>
          <a href="#" className="footer-a">
            Press Kit
          </a>
          <a href="#" className="footer-a">
            Contact Us
          </a>
        </div>
        <div className="flex flex-col py-6">
          <h2 className="footer-heading">ZOMAVERSE</h2>
          <a href="#" className="footer-a">
            Zomato
          </a>
          <a href="#" className="footer-a">
            Blinkit
          </a>
          <a href="#" className="footer-a">
            District
          </a>
          <a href="#" className="footer-a">
            Feeding India
          </a>
          <a href="#" className="footer-a">
            Hyperpure
          </a>
          <a href="#" className="footer-a">
            Zomato Live
          </a>
          <a href="#" className="footer-a">
            Zomaland
          </a>
          <a href="#" className="footer-a">
            Weather Union
          </a>
        </div>
        <div className="flex flex-col py-6">
          <h2 className="footer-heading">FOR RESTAURANTS</h2>
          <a href="#" className="footer-a">
            Partner With Us
          </a>
          <a href="#" className="footer-a">
            App For You
          </a>
        </div>
        <div className="flex flex-col py-6">
          <h2 className="footer-heading">LEARN MORE</h2>
          <a href="#" className="footer-a">
            Privacy
          </a>
          <a href="#" className="footer-a">
            Security
          </a>
          <a href="#" className="footer-a">
            Terms
          </a>
        </div>
        <div className="flex flex-col py-6">
          <h2 className="footer-heading">SOCIAL LINKS</h2>
          <a href="#" className="footer-a">
            Who we are
          </a>
          <a href="#" className="footer-a">
            Blog
          </a>
          <div className="">
            <a href="#">
              <img src={PlayStore} alt="playstore" className="w-32 my-2" />
            </a>
            <a href="#">
              <img src={AppStore} alt="AppStore" className="w-32" />
            </a>
          </div>
        </div>
      </section>
      <p className="footer-a py-3">
        By continuing past this page, you agree to our Terms of Service, Cookie
        Policy, Privacy Policy and Content Policies. All trademarks are
        properties of their respective owners. 2008-2025 © Zomato™ Ltd. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
