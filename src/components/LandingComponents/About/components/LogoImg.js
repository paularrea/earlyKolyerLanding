import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Logo = () => {
  return (
    <StaticImage
      placeholder="blurred"
      src="../../../../images/logo-kolyy.png"
      alt="App del collar inteligente Kolyy"
    />
  );
};

export default Logo;
