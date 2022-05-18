/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";

const NavigationSelector = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "bio", "about", "projects", "skills", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-active"
            style={active === item ? { backgroundColor: "#366c90" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationSelector;
