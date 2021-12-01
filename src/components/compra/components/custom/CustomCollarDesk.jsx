import React from "react";
import {
  container,
  flex,
  img,
  price_container,
  flex_selection,
  pack_container,
  swapper_container,
  iva,
  button,
  ahorro
} from "./custom.module.scss";
import Checkout from "../../../../Stripe/checkout"
import TechSwapper from "../../../LandingComponents/Specifications/components/TechSwapper/TechSwapper";
import ColorButtons from "./components/ColorButtons";
import SizeButtons from "./components/SizeButtons";

const CustomCollarDesk = ({ selected, showCollar, addSizeToSelected }) => {
  return (
    <div style={{ background: selected.bgColor }} className={container}>
      <h3>Personaliza tu Kolyy</h3>
      <section className={flex}>
        <div className={swapper_container}>
          <TechSwapper />
        </div>
        <div className={img}>{selected.img}</div>
        <div className={pack_container}>
          <div>
            <h6>Incluido:</h6>
            <p>Collar kolyy</p>
            <p>Cargador</p>
            <p>3 placas identificativas</p>
          </div>
          <hr />
          <div className={price_container}>
              <p className={ahorro}>Ahorras 65€</p>
            <h3>
              TOTAL €147
              <span>€210</span>
            </h3>
            <p className={iva}>IVA incl.</p>
            <div className={button}>
              <Checkout selected={selected}/>
            </div>
          </div>
        </div>
      </section>
      <section className={flex_selection}>
        <ColorButtons selected={selected} showCollar={showCollar} />
        <SizeButtons selected={selected} addSizeToSelected={addSizeToSelected} />
      </section>
    </div>
  );
};

export default CustomCollarDesk;
