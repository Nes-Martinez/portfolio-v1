import React, { useState, useEffect } from "react";

import { AppWrap, AnimationWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const query = '*[_type == "items"]';

    async function fetchAbout() {
      try {
        let data = await client.fetch(query);
        setItems(data);
      } catch (error) {
        return error;
      }
    }
    fetchAbout();
  }, []);

  return (
    <>
      <h2 className="section-header-text">About Me</h2>
      <div className="app__about-info-blocks">
        {items.map((item, index) => (
          <div className="app__about-block" key={item.title + index}>
            <img src={urlFor(item.imgUrl)} alt={item.title}></img>
            <div className="app__about-block-content">
              <h2 className="title-text">{item.title}</h2>
              <p className="description-text">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(AnimationWrap(About, "app__about"), "about");
