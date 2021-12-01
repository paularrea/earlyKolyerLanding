import React from "react";
import { selling_bar_container, total_bar, completed, bar_info } from "../earlyKolyyerBanner.module.scss";

const ProgressiveBar = () => {
  return (
    <section>
      <div className={total_bar}>
        <div className={completed}></div>
      </div>
      <div className={bar_info}>
        <p>Collares pre-vendidos: 40%</p>
        <p>Faltan 32 días</p>
      </div>
    </section>
  );
};
const SellingBar = () => {
  return (
    <div className={selling_bar_container}>
      <ProgressiveBar />
    </div>
  );
};

export default SellingBar;
