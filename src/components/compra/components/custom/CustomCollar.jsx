import React, { useEffect, useState } from "react";
import SelectedOptions from "./components/Selected/SelectedOptions";
import CollarOptions from "./components/Options/CollarOptions";
import {
  flex_custom_container,
  selected_options_container,
} from "./components/custom.module.scss";
import GuiaTallas from "../Modals/GuiaTallas";

const CustomCollar = ({ setSelected, selected }) => {
  const [
    displayCustomCollarSelection,
    setDisplayCustomCollarSelection,
  ] = useState(0);

  const [finished, setFinished] = useState(false);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [productsToCheckout, setProductsToCheckout] = useState([]);
  const [sentToStripe, setSendToStripe] = useState([]);
  const [openSize, setOpenSize] = useState(false);

  const openSizeModal = () => {
    setOpenSize(!openSize);
  };

  const pushCollarToArray = () => {
    setDisplayCustomCollarSelection(displayCustomCollarSelection + 1);
    // setDisplayProducts((prevArray) => [...prevArray, selected]);
    // setProductsToCheckout((prevArray) => [...prevArray, selected.checkout]);
    setSelected({});
  };

  const finishAndPay = () => {
    setDisplayProducts((prevArray) => [...prevArray, selected]);
    setProductsToCheckout((prevArray) => [...prevArray, selected.checkout]);
    // setSelected({});
    setFinished(true);
  };

  useEffect(() => {
    function findOcc(arr, key) {
      let arr2 = [];
      arr.forEach((x) => {
        if (
          arr2.some((val) => {
            return val[key] == x[key];
          })
        ) {
          arr2.forEach((k) => {
            if (k[key] === x[key]) {
              k["quantity"]++;
            }
          });
        } else {
          let a = {};
          a[key] = x[key];
          a["quantity"] = 1;
          arr2.push(a);
          return;
        }
      });
      return arr2;
    }
    setSendToStripe(productsToCheckout && findOcc(productsToCheckout, "price"));
  }, [productsToCheckout]);

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
        {productsToCheckout.length !== 0 ? (
          <p>Personaliza otro collar</p>
        ) : (
          <p>Personaliza tu Kolyy</p>
        )}
      </h3>
      <div id="buy-collar">
        <CollarOptions
          selected={selected}
          openModal={openSizeModal}
          setSelected={setSelected}
          pushCollarToArray={pushCollarToArray}
          finishAndPay={finishAndPay}
          productsToCheckout={productsToCheckout}
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
            productsToCheckout={productsToCheckout}
          />
        ))}
      </div>
      <div className={selected_options_container}>
        <SelectedOptions
          pushCollarToArray={pushCollarToArray}
          sentToStripe={sentToStripe}
          finished={finished}
          selected={selected}
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
