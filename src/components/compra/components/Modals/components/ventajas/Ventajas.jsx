import React from "react";
import {container} from "./ventajas.module.scss"

const Ventajas = () => {
  return (
    <div className={container}>
      <h4>*Ventajas de ser un Early kolyer:</h4>
      <div>
        <p>
          ¡Felicidades! Eres uno de lo primeros en disfrutar de la revolución
          kolyy y queremos recompensarte con un regalo de por vida: <br />
          <b>Un descuento en la suscripción para siempre.</b>
        </p>
        <br />
        <p>
          <b>¿Qué quiere decir esto?</b>
          <br />
          Que eres un GOLD MEMBER de kolyy y se te mantendrá el mismo precio por
          suscripción ahora y siempre. En vez de pagar los €7,99 de suscripción
          mensual, pagarás siempre la opción que elijas del Plan Early kolyer.
        </p>
      </div>
    </div>
  );
};

export default Ventajas;
