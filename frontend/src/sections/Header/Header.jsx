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

  const one = <p className="app__header-medium-text">WELCOME!</p>;
  const two = <p className="app__header-large-text">My name is Nestor.</p>;
  const three = (
    <p className="app__header-small-text">
      I'm a lifelong learner with a passion for building beautiful things on the
      web, whether through the magic of coding or through the many tools out
      there. Building things on the web makes me feel like a wizard. Let's work
      together.
    </p>
  );

  const four = (
    <div className="app__header-hero-button">
      <a href="/#projects">
        <button>View Projects</button>
      </a>
    </div>
  );

  const collection = [one, two, three, four];

  return (
    <>
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
    </>
  );
};

export default AppWrap(Header, "home");
