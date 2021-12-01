import React from "react";
import { container, flex_scroll, img } from "./scrollFeatures.module.scss";
import ScrollTag1 from "./img/ScrollTag1";
import ScrollTag2 from "./img/ScrollTag2";
import ScrollTag3 from "./img/ScrollTag3";
import ScrollTag4 from "./img/ScrollTag4";

const ScrollFeatures = () => {
  return (
    <div className={container}>
      <h2>Una app para disfrutar</h2>
      <div className={flex_scroll}>
        <div className={img}><ScrollTag1 /></div>
        <div className={img}><ScrollTag2 /></div>
        <div className={img}><ScrollTag3 /></div>
        <div className={img}><ScrollTag4 /></div>
      </div>
    </div>
  );
};

export default ScrollFeatures;
