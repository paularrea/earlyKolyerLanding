import React from "react";
import { container, flex_container, list } from "./plan.module.scss";

const PlanEarlyKolyer = () => {
  return (
    <div
      className={container}
    >
      <section>
        <h4>PLAN EARLY KOLYER*</h4>
        <div className={flex_container}>
          <div style={{ borderRight: "1px solid white" }}>
            <p>Mensual</p>
            <h5>€4,99</h5>
            <p>/mes</p>
          </div>
          <div>
            <p>Anual</p>
            <h5>€3,99</h5>
            <p>/mes</p>
          </div>
        </div>
      </section>
      <div className={list}>
        <p>Incluye:</p>
        <ul>
          <li>Localizador GPS </li>
          <li>LIVE Tracking ilimitado</li>
          <li>
            Función <b>Perro Perdido.</b>
          </li>
          <li>Cobertura nacional.</li>
          <li>Tracking de actividad en pasos y tiempo</li>
          <li>Informes periódicos de recomendaciones.</li>
          <li>Servicio de preguntas a profesionales.</li>
          <li>Atención al cliente PREMIUM</li>
          <li>Contenido personalizado ilimitado</li>
        </ul>
      </div>
    </div>
  );
};

export default PlanEarlyKolyer;
