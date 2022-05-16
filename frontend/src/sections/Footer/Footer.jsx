import React from "react";
import { AnimationWrap } from "../../wrapper";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="app__footer app__flex">
      <p>
        Nestor Martinez &copy; {new Date().getFullYear()}, all rights reserved.
      </p>
      <h5>
        Inspirations &amp; Aspirations:{" "}
        <a
          href="https://www.youtube.com/c/JavaScriptMastery"
          target="_blank"
          rel="noreferrer"
          className="fancy-link"
        >
          Javascript Mastery
        </a>
        ,{" "}
        <a
          href="https://www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A"
          target="_blank"
          rel="noreferrer"
          className="fancy-link"
        >
          Brian Design
        </a>
        ,{" "}
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noreferrer"
          className="fancy-link"
        >
          Brittany Chiang
        </a>
      </h5>
    </div>
  );
};

export default Footer;
