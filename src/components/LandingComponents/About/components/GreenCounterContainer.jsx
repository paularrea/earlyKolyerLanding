import React from "react";
import {
  green_container,
  flex_container,
  flex_div,
  desktop_container
} from "../about.module.scss";
import { fb_insta_icons } from "../../../../images/icons/fb_insta_icons.png";
import AnimatedCounter from "./AnimatedCounter";
import { InView } from "react-intersection-observer";

const GreenCounterContainer = () => {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <div ref={ref}>
          <div className={green_container}>
            <div className={desktop_container}>
              {" "}
              <h2>Comunidad</h2>
              <div className={flex_container}>
                <div style={{ borderRight: "2px solid whitesmoke" }}>
                  <h3>
                    +
                    <AnimatedCounter
                      inView={inView}
                      number="22000"
                      duration="6"
                    />
                  </h3>
                  <div className={flex_div}>
                    <p>kolyers</p>
                    <img src={fb_insta_icons} alt="" />
                    <img src={fb_insta_icons} alt="" />
                  </div>
                </div>
                <div>
                  <h3>
                    +
                    <AnimatedCounter
                      inView={inView}
                      number="10000"
                      duration="4"
                    />
                  </h3>
                  <p>kolyers con placa identificativa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
};

export default GreenCounterContainer;
