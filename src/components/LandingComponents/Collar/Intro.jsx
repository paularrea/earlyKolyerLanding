import React from "react";
import Button from "../../compra/components/Button";
import EarlyKolyyerBanner from "./components/EarlyKolyyer/EarlyKolyyerBanner";
import Features from "./components/Features/Features";
import IntroImg from "./components/introInfo/IntroImg";
import IntroInfo from "./components/introInfo/IntroInfo";
import { container, abs_info, abs_img } from "./intro.module.scss";

const Intro = () => {
  return (
    <div id="el-collar">
      <div className={container}>
        <div>
          <h1 data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
            El primer smartwatch para perros <br />
            <Button to="/comprar-collar-kolyy">Comprar ya</Button>
          </h1>
        </div>

        <div
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="1000"
          className={abs_img}
        >
          <IntroImg />
        </div>
        <div
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="1000"
          className={abs_info}
        >
          <IntroInfo />
        </div>
      </div>
      <div style={{ zIndex: 9999999 }}>
        <div style={{ backgroundColor: "#1D1D21" }}>
          <div
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
          >
            <EarlyKolyyerBanner />
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Intro;
