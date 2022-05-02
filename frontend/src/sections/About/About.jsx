import React, { useState, useEffect } from "react";

import "./About.scss";
import { images } from "../../constants";

const items = [
  {
    title: "Web Developer",
    description: "Hello there, how are you?",
    imgUrl: images.about01,
  },
  {
    title: "Web Developer",
    description: "Hello there, how are you?",
    imgUrl: images.about02,
  },
  {
    title: "Web Developer",
    description: "Hello there, how are you?",
    imgUrl: images.about03,
  },
  {
    title: "Web Developer",
    description: "Hello there, how are you?",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="app__about-header">About Me</h2>

      <div className="app__about-info-blocks">
        {items.map((item, index) => (
          <div className="app__about-block" key={item.title + index}>
            <img src={item.imgUrl} alt={item.title}></img>
            <h2 className="app__about-text">{item.title}</h2>
            <p className="app__about-description">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
