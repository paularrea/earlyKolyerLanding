import React, { useState } from "react";
import SelectedOptions from "./components/Selected/SelectedOptions";
import CollarOptions from "./components/Options/CollarOptions";
import {
  flex_custom_container,
  selected_options_container,
} from "./components/custom.module.scss";

const CustomCollar = ({ setSelected, selected }) => {
  const [
    displayCustomCollarSelection,
    setDisplayCustomCollarSelection,
  ] = useState(0);
  const [finished, setFinished] = useState(false);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [productsToCheckout, setProductsToCheckout] = useState([]);

  console.log(productsToCheckout, "array of products to checkout");

  const pushCollarToArray = () => {
    setDisplayCustomCollarSelection(displayCustomCollarSelection + 1);
    setDisplayProducts((prevArray) => [...prevArray, selected]);
    setProductsToCheckout((prevArray) => [...prevArray, selected.checkout]);
    setSelected({});
  };

  const finishAndPay = () => {
    setDisplayProducts((prevArray) => [...prevArray, selected]);
    setProductsToCheckout((prevArray) => [...prevArray, selected.checkout]);
    setFinished(true);
  };

  return (
    <div
      className={flex_custom_container}
      style={{ background: selected.bgColor }}
    >
      <h3
        style={{
          padding: "1rem 0 2rem 0",
          textAlign: "center",
          fontWeight: 800,
          fontSize: "20px",
          lineHeight: "24px",
        }}
      >
        Personaliza tu Kolyy{" "}
        {productsToCheckout.length !== 0 && (
          <p>nº {productsToCheckout.length + 1}</p>
        )}
      </h3>
      <div id="buy-collar">
        <CollarOptions
          selected={selected}
          setSelected={setSelected}
          pushCollarToArray={pushCollarToArray}
          finishAndPay={finishAndPay}
          productsToCheckout={productsToCheckout}
        />
        {[...Array(displayCustomCollarSelection)].map((_, i) => (
          <CollarOptions
            key={i}
            displayProducts={displayProducts}
            selected={selected}
            setSelected={setSelected}
            pushCollarToArray={pushCollarToArray}
            finishAndPay={finishAndPay}
            productsToCheckout={productsToCheckout}
          />
        ))}
      </div>
      <div className={selected_options_container}>
        <SelectedOptions
          finished={finished}
          setFinished={setFinished}
          displayProducts={displayProducts}
          productsToCheckout={productsToCheckout}
          setProductsToCheckout={setProductsToCheckout}
          setDisplayProducts={setDisplayProducts}
        />
      </div>
    </div>
  );
};
export default CustomCollar;
