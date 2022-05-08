import React, { useState } from "react";

import { AppWrap, AnimationWrap } from "../../wrapper";
import { client } from "../../client";

import "./Contact.scss";

const Contact = () => {
  return (
    <div>
      contact<h1>hi</h1>
      <h2>Hello</h2>
    </div>
  );
};

export default AppWrap(AnimationWrap(Contact, "app_contact"), "contact");
