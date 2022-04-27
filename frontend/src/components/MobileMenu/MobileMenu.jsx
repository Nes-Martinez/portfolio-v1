import React from "react";
import styled from "styled-components";

import "./MobileMenu.scss";

import { FaTimes as XIcon } from "react-icons/fa";

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <nav className="navbar__mobile">
        <div className="navbar__mobile-icon">
          <XIcon />
        </div>
        <ul className="navbar__mobile-links">
          {["home", "about", "work", "skills", "contact"].map((item) => (
            <li className="navbar-listItem" key={item} onClick={toggle}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

export default MobileMenu;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  height: 100vh;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  box-shadow: 0 0 20px rgba(168, 168, 168, 0.15);
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media screen and (min-width: 960px) {
    display: none;
  }
`;
