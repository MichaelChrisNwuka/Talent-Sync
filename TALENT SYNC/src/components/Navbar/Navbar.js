// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.Style.css"; 
import { HiChevronDown } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="Navbar-Container">
      <div className="Logo-Container">
        <img
          src={`data:image/svg+xml,${encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28" fill="none"><path d="M19.7058 16.9781L23.6024 13.0815C23.6024 10.4095 22.9344 7.84888 21.7098 5.62224L12.6362 14.0278V28H14.3619C20.4295 28 25.3837 23.1014 25.3837 16.9781H19.7058Z" fill="#1570EF"/><path d="M5.67793 11.0219L1.78131 14.9185C1.78131 17.5905 2.4493 20.1511 3.67396 22.3777L12.7475 13.9722V0H11.0219C4.95427 0 0 4.89861 0 11.0219H5.67793Z" fill="#53B1FD"/></svg>'
          )}`}
          alt="Logo"
          className="Logo"
        />
        <p className="Brandname">ClearLink<span>.</span></p>
      </div>
      <div className="Navbar-Links-Container">
        <Link className="Link" to="https://google.com">
          Products
          <HiChevronDown/>
        </Link>
        <Link className="Link" to="https://google.com">
          Solutions
          <HiChevronDown/>
        </Link>
        <Link className="Link" to="https://google.com">
          Resources
          <HiChevronDown/>
        </Link>
        <Link className="Link" to="https://google.com">
          Pricing
        </Link>
      </div>
      <div className="Navbar-Buttons-Container">
        <button>Talk to sales</button>
        <button>Sign up for free</button>
      </div>
    </div>
  );
};

export default Navbar;
