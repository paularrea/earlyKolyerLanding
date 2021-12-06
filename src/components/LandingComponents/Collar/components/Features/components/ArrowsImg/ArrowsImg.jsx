import React from "react";
import { container, img_container, abs1, abs2, abs3, abs4 } from "./arrowsImg.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../../../../../compra/components/Button"

const ArrowsImg = () => {
  return (
    <div className={container}>
        <Button to='/comprar-collar-kolyy'>Comprar ya</Button>
      <div className={img_container}>
        <div className={abs1}>
          <p>Tracking actividad</p>
        </div>
        <div className={abs2}>
          <p>Seguimiento salud</p>
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
          <p>Contenido personalizado</p>
        </div>
      </div>
    </div>
  );
};

export default ArrowsImg;
