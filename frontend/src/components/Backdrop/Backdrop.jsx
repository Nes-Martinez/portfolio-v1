import React from "react";

import "./Backdrop.scss";

const Backdrop = ({ isOpen, toggle }) => {
  return (
    isOpen && (
      <div className="app__backdrop" onClick={toggle}>
        <div>&nbsp;</div>
      </div>
    )
  );
};

export default Backdrop;
