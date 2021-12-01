import React from "react";
import { container, img_container, abs1, abs2, abs3, abs4 } from "./arrowsImg.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const ArrowsImg = () => {
  return (
    <div className={container}>
      <div className={img_container}>
        <div className={abs1}>
          <p>Monitorización de la actividad</p>
        </div>
        <div className={abs2}>
          <p>Seguimiento de la salud</p>
        </div>
        <StaticImage
          placeholder="blurred"
          src="../../../../../../../images/features_landing.png"
          alt="características del collar inteligente Kolyy"
        />
        <div className={abs3}>
          <p>Localizador GPS</p>
        </div>
        <div className={abs4}>
          <p>Formación personalizada</p>
        </div>
      </div>
    </div>
  );
};

export default ArrowsImg;
