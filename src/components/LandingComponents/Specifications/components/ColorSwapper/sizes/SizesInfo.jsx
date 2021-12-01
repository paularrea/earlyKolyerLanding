import React, { useState } from "react";
import MediaQuery from "react-responsive";
import Switcher from "./components/Switcher";
import {
  container,
  hide,
  tabInfo,
  flex_container,
} from "./sizesInfo.module.scss";

const TechSwapper = () => {
  const [selected, setSelectedTab] = useState(1);

  const selectedTab = [
    {
      size1: <b>Perros pequeños:</b>,
      size2: "Dachshund, French Bulldog, Jack Russell Terrier, Mini Aussie...",
      size3: "28 x 33 cm",
      index: 1,
    },
    {
      size1: <b>Perros medianos:</b>,
      size2: "Aussie, Beagle, Border Collie, Corgi, English Bulldog...",
      size3: "33 x 43 cm",
      index: 2,
    },
    {
      size1: <b>Perros grandes:</b>,
      size2: "Boxer, Doberman, German Shepherd, Golden Retriever, Pit Bull...",
      size3: "43 x 58 cm",
      index: 3,
    },
    {
      size1: <b>Perros extra grandes:</b>,
      size2: "Boxer, Doberman, German Shepherd, Golden Retriever, Pit Bull...",
      size3: "43 x 58 cm",
      index: 4,
    },
  ];
  return (
    <div className={container}>
      <Switcher selected={selected} setSelectedTab={setSelectedTab} />
        {selectedTab.map((item) => (
          <div className={selected === item.index ? tabInfo : hide}>
            <p>{item.size1}</p>
            <br />
            <p>{item.size2}</p>
            <br />
            <p>{item.size3}</p>
          </div>
        ))}
    </div>
  );
};

export default TechSwapper;
