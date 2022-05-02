import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./Header.scss";
import { videos } from "../../constants";

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className="app__header-small-text">Hello!</div>;
  const two = <div className="app__header-large-text">I'm Nes.</div>;
  const three = (
    <div className="app__header-medium-text">Let's work together.</div>
  );

  const collection = [one, two, three];

  return (
    <div id="home" className="app__header">
      <div className="app__header-video-container">
        <div className="app__header-background"></div>
        <video
          className="app__header-video"
          src={videos.coding}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="app__header-content">
        <TransitionGroup component={null}>
          {isMounted &&
            collection.map((item, i) => (
              <CSSTransition key={i} classNames="intro-text" timeout={2000}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Header;
