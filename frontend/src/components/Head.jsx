import React from "react";
import { Helmet } from "react-helmet";

const Head = () => {
  return (
    <Helmet>
      <html lang="en" />
      <meta
        name="description"
        content="Nes Martinez is a web developer based in New Jersey, USA."
      />
    </Helmet>
  );
};

export default Head;
