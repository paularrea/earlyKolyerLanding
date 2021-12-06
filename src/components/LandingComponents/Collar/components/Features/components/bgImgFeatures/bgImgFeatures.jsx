import React from "react";
import OnePhoneMockup from "./OnePhoneMockup";
import MultiplePhoneMockup from "./MultiplePhonesMockup";
import GreenComponent from "./components/GreenComponent";

import {
  app_container_features,
  abs_1,
  abs_2,
  abs_3,
  abs_img_1,
  abs_img_2,
  abs_img_3,
} from "./bgImgFeatures.module.scss";

const BgImgFeatures = () => {
  return (
    <div className={app_container_features}>
      <h2 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">Corre hacia una vida activa y saludable</h2>
      <div className={abs_img_1}>
        <OnePhoneMockup />
      </div>
      <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000" className={abs_1}>
        <b>Registra su actividad</b> para mantener a tu perro en buena forma.
      </p>
      <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000" className={abs_2}>
        Conviértete en su entrenador personal y{" "}
        <b>disfruta mientras él cumple sus objetivos.</b>
      </p>
      <div className={abs_img_2}>
        <MultiplePhoneMockup />
      </div>
      <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000" className={abs_3}>
        <b>Un paseo con juego</b> es mucho más divertido.
      </p>
      <div className={abs_img_3}>
        <GreenComponent />
      </div>
    </div>
  );
};

export default BgImgFeatures;
