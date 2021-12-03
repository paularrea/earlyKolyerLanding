import React from "react";
import EarlyKolyyerBanner from "./components/EarlyKolyyer/EarlyKolyyerBanner";
import Features from "./components/Features/Features";
import IntroImg from "./components/introInfo/IntroImg";
import IntroInfo from "./components/introInfo/IntroInfo";
import { container, abs_info, abs_img } from "./intro.module.scss";

const Intro = () => {
  return (
    <div id="el-collar">
      <div className={container}>
        <h1>El primer smartwatch para perros</h1>
        <div className={abs_img}>
          <IntroImg />
        </div>
        <div className={abs_info}>
          <IntroInfo />
        </div>
      </div>
      <div style={{ zIndex: 9999999 }}>
        <div style={{ backgroundColor: "#1D1D21" }}>
          <EarlyKolyyerBanner />
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Intro;
