import React, { useState, useEffect } from "react";
import { AppWrap } from "../../wrapper";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./Header.scss";
import { videos } from "../../constants";

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className="app__header-medium-text">Hello!</div>;
  const two = <div className="app__header-large-text">I'm Nestor.</div>;
  const three = (
    <div className="app__header-small-text">
      I'm a lifelong learner with a passion for building beautiful things on the
      web, and writing beautiful code for those things. Let's work together.
    </div>
  );

  const four = (
    <div className="aoo__header-hero-button">
      <button>
        <a href="/NM-resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </button>
    </div>
  );

  const collection = [one, two, three];

  return (
    <div className="app__header app__flex">
      {/* <div className="app__header-video-container">
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
      </div> */}
      <div class="app__header-content">
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

export default AppWrap(Header, "home");
