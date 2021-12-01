import React from "react";
import { container, sponsors_container, flex_container, img } from "./sponsors.module.scss";
import UabIcon from "./UabIcon";
import CawecIcon from "./CawecIcon";
import MovistarIcon from "./MovistarIcon";

const Sponsors = () => {
  return (
    <div className={container}>
      <div className={sponsors_container}>
        <h4>Colaboradores</h4>
        <div className={flex_container}>
          <div className={img}>
            <MovistarIcon />
          </div>
          <div className={img}>
            <UabIcon />
          </div>
          <div className={img}>
            <CawecIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
