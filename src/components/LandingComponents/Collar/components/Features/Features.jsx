import React from "react";
import { container } from "./features.module.scss";
import FeatureSwapper from "./components/FeatureSwapper/FeatureSwapper";
import ScrollFeatures from "./components/horizontalScrollFeature/ScrollFeatures";
import BgImgFeatures from "./components/bgImgFeatures/bgImgFeatures";
import Sponsors from "./components/Sponsors/Sponsors";
import ArrowsImg from "./components/ArrowsImg/ArrowsImg";

const Features = () => {
  return (
    <>
      <div className={container}>
        <h2 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
          Dale más vida
        </h2>
        <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
          Un collar diseñado para satisfacer a los amantes de los perros en el
          crecimiento, seguimiento y el desarrollo de su vida.
        </p>
        <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
          <ArrowsImg />
        </div>
      </div>
        <Sponsors />

      <BgImgFeatures />
      <FeatureSwapper />
      <ScrollFeatures />
    </>
  );
};

export default Features;
