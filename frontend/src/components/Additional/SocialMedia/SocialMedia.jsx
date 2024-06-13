import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/nes-martinez/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <FaLinkedin />
        </div>
      </a>
      <a
        href="https://github.com/Nes-Martinez"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <FaGithub />
        </div>
      </a>
      <a
        href="https://www.facebook.com/nestor.a.s.martinez/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <FaFacebook />
        </div>
      </a>
      <a
        href="https://twitter.com/Nes_Martinez"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <FaTwitter />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
