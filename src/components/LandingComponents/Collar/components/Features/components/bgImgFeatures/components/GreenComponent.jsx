import React from "react";
import RunGirlImg from "../RunGirlImg";
import { green_container, img, line } from "./greenComponent.module.scss";

const GreenComponent = () => {
  return (
    <div className={green_container}>
      <div className={img}>
        <RunGirlImg />
      </div>
      <div className={line}></div>
    </div>
  );
};

export default GreenComponent;
