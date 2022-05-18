import React from "react";
import { Helmet } from "react-helmet-async";
import { images } from "../constants/";

const Head = () => {
  return (
    <Helmet>
      <html lang="en" />
      <meta
        name="description"
        content="Nes Martinez is a web developer based in New Jersey, USA."
      />

      <meta property="og:title" content="Nes Martinez" />
      <meta
        property="og:description"
        content="Nes Martinez is a web developer based in New Jersey, USA."
      />
      <meta property="og:image" content={images.profile} />
      <meta property="og:url" content="nesmartinez.com" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Nes Martinez" />
      <meta
        name="twitter:description"
        content="Nes Martinez is a web developer based in New Jersey, USA."
      />
      <meta name="twitter:image" content={images.profile} />
    </Helmet>
  );
};

export default Head;
