import React from "react";
import styled from "styled-components";

import { images } from "../../constants";
import "./MobileMenu.scss";

import { FaTimes as XIcon } from "react-icons/fa";

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <div className="app__navbar-mobile">
      <Container isOpen={isOpen}>
        <div className="app__navbar-mobile-logo">
          <img src={images.logo2} alt="logo" />
        </div>
        <div className="app__navbar-mobile-icon" onClick={toggle}>
          <XIcon />
        </div>
        <ul className="app__navbar-mobile-links">
          {["home", "bio", "about", "projects", "skills", "contact"].map(
            (item) => (
              <li key={item} onClick={toggle}>
                <a href={`#${item}`}>{item}</a>
              </li>
            )
          )}
          <li>
            <a href="/NM-resume.pdf" target="_blank" rel="noopener noreferrer">
              <button>Resume</button>
            </a>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default MobileMenu;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  height: 100vh;
  background: var(--white-color);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  box-shadow: 0 0 20px rgba(168, 168, 168, 0.15);
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media screen and (min-width: 960px) {
    display: none;
  }
`;
