import React from "react";
import { flex_container } from "./introInfo.module.scss";
import tick_icon from "../../../../../images/icons/garantia_icon.png";
import collar_icon from "../../../../../images/icons/collar_icon.png";
import delivery_icon from "../../../../../images/icons/delivery_icon.png";

const IntroInfo = () => {
  return (
    <section className={flex_container}>
      <div>
        <img src={delivery_icon} alt="" />
        <p>
          Entrega estimada: <br />
          <b>
            21 - 27 de febrero
            <b />
          </b>
        </p>
      </div>
      <div>
        <img src={tick_icon} alt="" />
        <p>
          <b>
            2 años de garantía
            <b />
          </b>
        </p>
      </div>
      <div>
        <img src={collar_icon} alt="" />
        <p>
          <b>
            Unidades limitadas
            <b />
          </b>
        </p>
      </div>
    </section>
  );
};

export default IntroInfo;
