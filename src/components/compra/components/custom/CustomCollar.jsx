import React, { useState } from "react";
import SelectedOptions from "./components/SelectedOptions";
// import CustomCollarDesk from "./CustomCollarDesk";
import CollarOptions from "./components/CollarOptions";

const CustomCollar = ({ setSelected, selected }) => {
  const [
    displayCustomCollarSelection,
    setDisplayCustomCollarSelection,
  ] = useState(0);
  const [finished, setFinished] = useState(false);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [productsToCheckout, setProductsToCheckout] = useState([]);

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

  console.log(productsToCheckout, "array of products to checkout");

  return (
    <div id="buy-collar">
      <CollarOptions
        selected={selected}
        setSelected={setSelected}
        pushCollarToArray={pushCollarToArray}
        finishAndPay={finishAndPay}
      />
      {[...Array(displayCustomCollarSelection)].map((_, i) => (
        <CollarOptions
          key={i}
          displayProducts={displayProducts}
          selected={selected}
          setSelected={setSelected}
          pushCollarToArray={pushCollarToArray}
          finishAndPay={finishAndPay}
        />
      ))}
      <SelectedOptions
        finished={finished}
        displayProducts={displayProducts}
        productsToCheckout={productsToCheckout}
        setProductsToCheckout={setProductsToCheckout}
        setDisplayProducts={setDisplayProducts}
      />
    </div>
    /* <MediaQuery minWidth={870}>
        <CustomCollarDesk
          selected={selected}
          showCollar={showCollar}
          addSizeToSelected={addSizeToSelected}
        />
      </MediaQuery> */
  );
};
export default CustomCollar;
