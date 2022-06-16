import React from "react";

import { images } from "../../constants";
import { AppWrap, AnimationWrap } from "../../wrapper";
import "./Bio.scss";

const Bio = () => {
  return (
    <>
      <h2 className="section-header-text">About Me</h2>
      <div className="app__bio-container">
        <div className="app__bio-left">
          <img src={images.profile} alt="profile" />
          <p className="sub-text">&copy; Ricardo Torres.</p>
        </div>
        <div className="app__bio-right">
          <p className="bio-text">
            My interest in building things for the web goes back to the early
            days of Myspace and AngelFire, tinkering with tables and background
            colors. But my trajectory to becoming a software engineer has been
            anything but linear. I've held a number of positions at the
            intersections of arts, nonprofits, education and technology, all of
            which have enabled me to foster a strong ability to translate and
            understand client needs to the tools/websites I build.
          </p>
          <p className="bio-text">
            I completed a teaching fellowship at Fullstack Academy after
            completing its 13-week fullstack Javascript software engineering
            intensive. Most recently have spent several months freelancing a
            variety of projects. I continue to sharpen my skills, merging clean
            code with beautiful designs. I invite you to learn more about and
            connect with me{" "}
            <a
              href="https://www.linkedin.com/in/nes-martinez/"
              target="_blank"
              rel="noreferrer"
              className="fancy-link"
            >
              {" "}
              on LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default AppWrap(AnimationWrap(Bio, "app__bio"), "bio");
