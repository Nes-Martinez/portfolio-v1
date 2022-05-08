import React, { useState } from "react";

import { About, Footer, Header, Skills, Projects, Contact } from "./sections";
import { Navbar, MobileMenu, Backdrop } from "./components";

import "./App.scss";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      <Backdrop isOpen={isOpen} toggle={toggle} />
      <MobileMenu isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
