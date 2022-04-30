import React from "react";

import { images } from "../../constants";
import "./Navbar.scss";
import { FaBars as MenuBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="navbar__listItem" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
            <div />
          </li>
        ))}
        <li className="navbar__button">
          <button>
            <a href="/NM-resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </button>
        </li>
      </ul>

      <div className="navbar__mobile-toggle" onClick={toggle}>
        <MenuBars />
      </div>
    </nav>
  );
};

export default Navbar;
