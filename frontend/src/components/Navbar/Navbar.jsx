import React from "react";

import { images } from "../../constants";
import "./Navbar.scss";

import { FaBars as MenuBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home">
          <img src={images.icon} alt="logo" />
        </a>
      </div>
      <div className="app__navbar-mobile-toggle" onClick={toggle}>
        <MenuBars />
      </div>
      <ul className="app__navbar-links">
        {["home", "bio", "about", "projects", "skills", "contact"].map(
          (item) => (
            <li className="app__navbar-listItem" key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
              <div />
            </li>
          )
        )}
        <li className="app__navbar-button">
          <a href="/NM-resume.pdf" target="_blank" rel="noopener noreferrer">
            <button>resume</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
