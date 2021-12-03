import React, { useState } from "react";
import Switcher from "./components/Switcher";
import { container, hide, tabInfo } from "./techSwapper.module.scss";

const TechSwapper = () => {
  const [selected, setSelectedTab] = useState(1);

  const selectedTab = [
    {
      tech: (
        <div>
          <p>Dimensiones: 7,5cm (largo) x 4,1cm (ancho) x 2,5cm (alto).</p>
          <br />
          <p>Peso: 60g.</p>
          <br />
          <p>3 LED multicolor + 3 LED iluminación.</p>
          <br />
          <p>Puerto de carga: micro-USB.</p>
          <br />
          <p>Batería: LiPo 1100 mAh.</p>
        </div>
      ),
      index: 1,
    },
    {
      tech: (
        <div>
          <p>Peso del collar: hasta 140g (dependiendo de la talla).</p>
        </div>
      ),
      index: 2,
    },
    {
      tech: (
        <div>
          <p>Resistente al agua (IP67).</p>
          <br />
          <p>Sumergible hasta 1m (IP67).</p>
          <br />
          <p>Resistente al polvo y arena (IP67).</p>
        </div>
      ),
      index: 3,
    },
  ];
  return (
    <div className={container}>
      <Switcher selected={selected} setSelectedTab={setSelectedTab} />
      {selectedTab.map((item) => (
        <div className={selected === item.index ? tabInfo : hide}>
          <>{item.tech}</>
        </div>
      ))}
    </div>
  );
};

export default TechSwapper;
