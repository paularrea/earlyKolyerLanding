import React, { useState } from "react";
import MediaQuery from "react-responsive";
import GoogleAppleConnect from "./components/GoogleAppleConntect/GoogleAppleConnect";
import Switcher from "./components/Switcher";
import {
  container,
  hide,
  tabInfo,
  flex_container,
} from "./swapper.module.scss";
import MockupActivity from "./components/img/MockupActivity";
import MockupHealth from "./components/img/MockupHealth";
import MockupLocation from "./components/img/MockupLocation";

const FeatureSwapper = () => {
  const [selected, setSelectedTab] = useState(1);

  const selectedTab = [
    {
      text: (
        <p>
          Tracking de <b>pasos</b> y <b>tiempo de actividad.</b> de tu perro.
          Reportes{" "}
          <b>diarios, semanales y menusales. Objetivos personalizables.</b> a tu
          perro.
        </p>
      ),
      img: <MockupActivity />,
      index: 1,
    },
    {
      text: (
        <p>
          <b>Seguimiento y sugerencias de </b>profesionales veterinarios.{" "}
          <b>Informes periódicos</b> de recomendaciones. Servicio de{" "}
          <b>consultas 24h.</b>
        </p>
      ),
      img: <MockupHealth />,
      index: 2,
    },
    {
      text: (
        <p>
          Localización <b>en tiempo real</b> por GPS.
          <br />
          Función <b>“perro perdido”.</b>
          <br />
          Cobertura por todo el territorio <b>nacional.</b>
        </p>
      ),
      img: <MockupLocation />,
      index: 3,
    },
  ];
  return (
    <div className={container}>
      <GoogleAppleConnect />
      <h2>Todos los detalles en tu mano</h2>
      <Switcher selected={selected} setSelectedTab={setSelectedTab} />
      <MediaQuery minWidth={900}>
        <div className={flex_container}>
          {selectedTab.map((item) => {
            return (
              <div className={tabInfo}>
                {item.text}
                <div>{item.img}</div>
              </div>
            );
          })}
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={899}>
        {selectedTab.map((item) => (
          <div className={selected === item.index ? tabInfo : hide}>
            {item.text}
            <div>{item.img}</div>
          </div>
        ))}
      </MediaQuery>
    </div>
  );
};

export default FeatureSwapper;
