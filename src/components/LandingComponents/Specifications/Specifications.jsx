import React, { useState } from "react";
import {
  container,
  img_container,
  container_section,
  flex_container,
} from "./specifications.module.scss";
import TechSwapper from "./components/TechSwapper/TechSwapper";
import TechImg from "./components/TechImg";
import ColorSwapper from "./components/ColorSwapper/ColorSwapper";
import Videos from "../Videos/Videos";
import MediaQuery from "react-responsive";
import Carousel from "./components/ColorSwapper/ColorCarousel/Carousel";
import SizesInfo from "./components/ColorSwapper/sizes/SizesInfo";

const Specifications = () => {
  const [bgColor, setBgColor] = useState("#434343");
  return (
    <>
      <div
        id="especificaciones"
        className={container}
        style={{ backgroundColor: bgColor }}
      >
        <section>
          <h4>Elige el tuyo</h4>
          <p>3 colores y 4 tamaños para elegir.</p>
          <MediaQuery maxWidth={900}>
            <ColorSwapper setBgColor={setBgColor} bgColor={bgColor} />
          </MediaQuery>
          <MediaQuery minWidth={900}>
            <div className={flex_container}>
              <Carousel setBgColor={setBgColor} />
              <SizesInfo />
            </div>
          </MediaQuery>
        </section>
        <section className={container_section}>
          <h2>kolyy tech</h2>
          <div className={flex_container}>
            <div className={img_container}>
              <TechImg />
            </div>
            <TechSwapper />
          </div>
        </section>
      </div>
      <Videos />
    </>
  );
};

export default Specifications;
