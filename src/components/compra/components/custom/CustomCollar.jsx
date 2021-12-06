import React, { useEffect, useState } from "react";
import SelectedOptions from "./components/Selected/SelectedOptions";
import CollarOptions from "./components/Options/CollarOptions";
import {
  flex_custom_container,
  selected_options_container,
} from "./components/custom.module.scss";
import GuiaTallas from "../Modals/GuiaTallas";
import { stripeProducts } from "../../../../Stripe/products";

const CustomCollar = ({ setSelected, selected }) => {
  const [
    displayCustomCollarSelection,
    setDisplayCustomCollarSelection,
  ] = useState(0);
  const [finished, setFinished] = useState(false);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [stripeUrl, setStripeUrl] = useState("");
  const [openSize, setOpenSize] = useState(false);

  const openSizeModal = () => {
    setOpenSize(!openSize);
  };

  const pushCollarToArray = () => {
    setDisplayCustomCollarSelection(displayCustomCollarSelection + 1);
    setSelected({});
  };

  const finishAndPay = () => {
    setDisplayProducts((prevProduct) => [...prevProduct, selected]);
    setFinished(true);
  };

  useEffect(() => {
    setStripeUrl(stripeProducts(displayProducts));
  }, [displayProducts]);

  return (
    <div
      className={flex_custom_container}
      style={{ background: selected.bgColor }}
    >
      {openSize && <GuiaTallas openModal={openSizeModal} />}
      <h3
        style={{
          padding: "1rem 0",
          textAlign: "center",
          fontWeight: 800,
          fontSize: "20px",
          lineHeight: "24px",
        }}
      >
        {displayProducts.length !== 0 ? (
          <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">Personaliza otro collar</p>
        ) : (
          <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">Personaliza tu Kolyy</p>
        )}
      </h3>
      <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000" id="buy-collar">
        <CollarOptions
          selected={selected}
          openModal={openSizeModal}
          setSelected={setSelected}
          pushCollarToArray={pushCollarToArray}
          finishAndPay={finishAndPay}
        />
        {[...Array(displayCustomCollarSelection)].map((_, i) => (
          <CollarOptions
            key={i}
            openModal={openSizeModal}
            displayProducts={displayProducts}
            selected={selected}
            setSelected={setSelected}
            pushCollarToArray={pushCollarToArray}
            finishAndPay={finishAndPay}
          />
        ))}
      </div>
      <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000" className={selected_options_container}>
        <SelectedOptions
          stripeUrl={stripeUrl}
          pushCollarToArray={pushCollarToArray}
          finished={finished}
          selected={selected}
          setFinished={setFinished}
          displayProducts={displayProducts}
          setDisplayProducts={setDisplayProducts}
        />
      </div>
    </div>
  );
};
export default CustomCollar;
