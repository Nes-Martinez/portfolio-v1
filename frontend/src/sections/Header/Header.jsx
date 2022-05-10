import React, { useState, useEffect } from "react";
import { AppWrap } from "../../wrapper";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./Header.scss";

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const one = <p className="app__header-medium-text">Hello!</p>;
  const two = <p className="app__header-large-text">I'm Nes.</p>;
  const three = (
    <p className="app__header-small-text">
      I'm a lifelong learner with a passion for building beautiful things on the
      web, and writing beautiful code for those things. Let's work together.
    </p>
  );

  const four = (
    <div className="app__header-hero-button">
      <button>
        <a href="/#projects">View Projects</a>
      </button>
    </div>
  );

  const collection = [one, two, three, four];

  return (
    <>
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
    </>
  );
};

export default AppWrap(Header, "home");
