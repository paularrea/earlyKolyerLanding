import React from "react";
import {
  shadow_container,
  subs_container,
  close_btn,
  text,
} from "./modal.module.scss";
import PlanEarlyKolyer from "./components/plan/PlanEarlyKolyer";
import Ventajas from "./components/ventajas/Ventajas";

const SubscriptionPlan = ({ openModal }) => {
  return (
    <div onClick={openModal} className={shadow_container}>
      <div className={subs_container}>
        <h3>Plan de suscripción</h3>
        <div className={close_btn} onClick={openModal}>
          X
        </div>
        <PlanEarlyKolyer />
        <div className={text}>
          <h3>¿Cuándo empiezo a pagar la suscripción?</h3>
          <br />
          <p>
            El pago de la suscripción se realizará a través de la app kolyy en
            el momento de recibir y activar el collar.
          </p>
        </div>
        <Ventajas />
      </div>
    </div>
  );
};

export default SubscriptionPlan;
