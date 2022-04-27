import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./Header.scss";

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className="header-small-text">Hello!</div>;
  const two = <div className="header-large-text">I'm Nes.</div>;
  const three = <div className="header-medium-text">Let's work together.</div>;

  const collection = [one, two, three];

  return (
    <div id="home" className="header">
      <TransitionGroup component={null}>
        {isMounted &&
          collection.map((item, i) => (
            <CSSTransition key={i} classNames="intro-text" timeout={2000}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>
                {item} shabuuu
              </div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  );
};

export default Header;
