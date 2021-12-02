import React, { useState } from "react";
import SelectedOptions from "./components/Selected/SelectedOptions";
// import CustomCollarDesk from "./CustomCollarDesk";
import CollarOptions from "./components/Options/CollarOptions";
import MediaQuery from "react-responsive";
import CustomCollarDesk from "./CustomCollarDesk";

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
    <>
      {/* <MediaQuery maxWidth={870}> */}
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
        </div>
        <SelectedOptions
          finished={finished}
          setFinished={setFinished}
          displayProducts={displayProducts}
          productsToCheckout={productsToCheckout}
          setProductsToCheckout={setProductsToCheckout}
          setDisplayProducts={setDisplayProducts}
        />
      {/* </MediaQuery> */}
      {/* <MediaQuery minWidth={870}>
        <CustomCollarDesk
          selected={selected}
          setSelected={setSelected}
          pushCollarToArray={pushCollarToArray}
          finishAndPay={finishAndPay}
          finished={finished}
          setFinished={setFinished}
          displayProducts={displayProducts}
          productsToCheckout={productsToCheckout}
          setProductsToCheckout={setProductsToCheckout}
          setDisplayProducts={setDisplayProducts}
        />
      </MediaQuery> */}
    </>
  );
};
export default CustomCollar;
