import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <FaFacebook />
      </div>
      <div>
        <FaInstagram />
      </div>
      <div>
        <FaYoutube />
      </div>
      <div>
        <FaTwitter />
      </div>
    </div>
  );
};

export default SocialMedia;
