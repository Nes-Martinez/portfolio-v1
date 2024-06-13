import React, { useState } from "react";
import { HelmetProvider } from "react-helmet-async";

import {
  About,
  Footer,
  Header,
  Skills,
  Projects,
  Contact,
  Bio,
} from "./sections";
import { Navbar, MobileMenu, Backdrop } from "./components";
import Head from "./components/Head";

import "./App.scss";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      <HelmetProvider>
        <Head />
        <Backdrop isOpen={isOpen} toggle={toggle} />
        <MobileMenu isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Header />
        <Skills />
        <Projects />
        <Bio />
        <About />
        <Contact />
        <Footer />
      </HelmetProvider>
    </div>
  );
};

export default App;
