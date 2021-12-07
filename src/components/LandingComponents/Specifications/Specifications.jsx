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
    <div id="especificaciones">
      <div className={container} style={{ backgroundColor: bgColor }}>
        <section data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
          <h4>En 3 colores y 4 tallas</h4>
          <p>Elige el tuyo</p>
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
        <section
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="1000"
          className={container_section}
        >
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
    </div>
  );
};

export default Specifications;
