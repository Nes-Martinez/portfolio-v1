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
        </div>
        <div className="app__bio-right">
          <p className="description-text">
            Hey there, my name is Nes. My interest in building things for the
            web goes back to the early days of Myspace and AngelFire. That said,
            my trajectory to becoming a software engineer has been anything but
            linear. My background spans the intersections of arts, nonprofits,
            education and technology, which has enabled me to foster a strong
            ability to translate and understand client needs to the
            tools/websites I build.
            <div>
              Most recently, I completed a teaching fellowship at Fullstack
              Academy after completing its 13-week software engineering
              intensive, and have spent several months freelancing a variety of
              projects. I continue to sharpen my skills, merging clean code with
              beautiful designs. I invite you to learn more and connect with me{" "}
              <a href="" className="fancy-link">
                {" "}
                on LinkedIn
              </a>
              .
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default AppWrap(AnimationWrap(Bio, "app__bio"), "bio");
