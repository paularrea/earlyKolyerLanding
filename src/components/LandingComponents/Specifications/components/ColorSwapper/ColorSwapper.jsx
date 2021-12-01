import React from "react";
import { flex_scroll, img } from "./colorSwapper.module.scss";
import { InView } from "react-intersection-observer";
import YellowCollar from "./YellowCollar";
import BlackCollar from "./BlackCollar";
import BlueCollar from "./BlueCollar";
import SizesInfo from "./sizes/SizesInfo";

const ColorSwapper = ({ setBgColor }) => {
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
      <SizesInfo />
    </>
  );
};

export default ColorSwapper;
