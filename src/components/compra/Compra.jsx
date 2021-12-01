import React, { useState, useEffect } from "react";
import { container } from "./compra.module.scss";
import Cards from "../compra/components/cards/Cards";
import EarlyKolyyerBanner from "../LandingComponents/Collar/components/EarlyKolyyer/EarlyKolyyerBanner";
import CustomCollar from "./components/custom/CustomCollar";
import List from "./components/List/List";
import IntroCard from "./components/IntroCard/IntroCard";
import TopBanner from "./components/banner/TopBanner";

const Compra = () => {
  const [selected, setSelected] = useState({});

  return (
    <>
      <TopBanner />
      <div className={container}>
        <h2>Dale más vida</h2>
        <p>
          Esta promoción es exclusiva para los primeros clientes{" "}
          <b>(Early kolyers)</b> del collar kolyy.
        </p>
        <IntroCard />
        <EarlyKolyyerBanner />
        <Cards />
        <List />
        <CustomCollar
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </>
  );
};

export default Compra;
