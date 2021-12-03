import React from "react";
import { flex_scroll, img, dots } from "./colorSwapper.module.scss";
import { InView } from "react-intersection-observer";
import YellowCollar from "./YellowCollar";
import BlackCollar from "./BlackCollar";
import BlueCollar from "./BlueCollar";
import SizesInfo from "./sizes/SizesInfo";

const ColorSwapper = ({ setBgColor, bgColor }) => {
  return (
    <>
      <div className={flex_scroll}>
        <InView
          className={img}
          threshold={1}
          as="div"
          onChange={(inView) => inView && setBgColor("#744254")}
        >
          <YellowCollar />
        </InView>
        <InView
          className={img}
          threshold={1}
          as="div"
          onChange={(inView) => inView && setBgColor("#434343")}
        >
          <BlackCollar />
        </InView>
        <InView
          className={img}
          threshold={1}
          as="div"
          onChange={(inView) => inView && setBgColor("#43A0B0")}
        >
          <BlueCollar />
        </InView>
      </div>
      <div>
        <div className={dots}>
          <div style={{ background: bgColor === "#744254" && "white" }}></div>
          <div style={{ background: bgColor === "#434343" && "white" }}></div>
          <div style={{ background: bgColor === "#43A0B0" && "white" }}></div>
        </div>
      </div>
      <SizesInfo />
    </>
  );
};

export default ColorSwapper;
