import React from "react";
import BoxImg from "./BoxImg";
import TwoBoxesImg from "./TwoBoxesImg";
import {
  container,
  gray_container,
  abs_img_1,
  abs_img_2,
} from "./packaging.module.scss";

const PackagingComponent = () => {
  return (
    <div className={container}>
      <div className={gray_container}>
        <div className={abs_img_1}>
          <BoxImg />
        </div>
        <h2>Un regalo perfecto para él</h2>
        <p>Un packaging eco-friendly para un collar dog-friendly.</p>
        <br />
        <p>Además, aún te espera alguna sorpresa en su interior.</p>
        <div className={abs_img_2}>
          <TwoBoxesImg />
        </div>
      </div>
    </div>
  );
};

export default PackagingComponent;
