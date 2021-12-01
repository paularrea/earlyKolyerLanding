import React, { useState } from "react";
import Switcher from "./components/Switcher";
import {
  container,
  hide,
  tabInfo,
} from "./techSwapper.module.scss";

const TechSwapper = () => {
  const [selected, setSelectedTab] = useState(1);

  const selectedTab = [
    {
      tech1: "Dimensiones: 3x15 cm.",
      tech2: "Peso: 600gr.",
      tech3: "Téxtil: nylon con doble capa.",
      tech4: "Batería: ciclo de carga cada 15 días.",
      index: 1,
    },
    {
      tech1: "Gestiona diferentes usuarios.",
      tech2: "Una única app para todos los collares.",
      tech3: "Estés donde estés.",
      tech4: "",
      index: 2,
    },
    {
      tech1: "Dimensiones: 3x15 cm.",
      tech2: "Peso: 600gr.",
      tech3: "Téxtil: nylon con doble capa.",
      tech4: "Batería: ciclo de carga cada 15 días.",
      index: 3,
    },
    {
      tech1: "Dimensiones: 3x15 cm.",
      tech2: "Peso: 600gr.",
      tech3: "Téxtil: nylon con doble capa.",
      tech4: "Batería: ciclo de carga cada 15 días.",
      index: 4,
    },
  ];
  return (
    <div className={container}>
      <Switcher selected={selected} setSelectedTab={setSelectedTab} />
      {selectedTab.map((item) => (
        <div className={selected === item.index ? tabInfo : hide}>
          <p>{item.tech1}</p>
          <p>{item.tech2}</p>
          <p>{item.tech3}</p>
          <p>{item.tech4}</p>
        </div>
      ))}
    </div>
  );
};

export default TechSwapper;
