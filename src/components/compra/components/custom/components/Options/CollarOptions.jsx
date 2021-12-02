import React, { useState, useEffect } from "react";
import { container, img } from "../custom.module.scss";
import MediaQuery from "react-responsive";
import ColorButtons from "./components/ColorButtons";
import SizeButtons from "./components/SizeButtons";
import { collarCollection } from "../CollarCollection";
import { products_30_off } from "../../../../../../Stripe/products";
import AddMore from "./components/AddMore";

const CollarOptions = ({
  selected,
  setSelected,
  displayProducts,
  pushCollarToArray,
  finishAndPay,
  productsToCheckout
}) => {
  const [chooseSize, setChooseSize] = useState("");
  const [productId, setProductId] = useState("");
  const [chooseColor, setChooseColor] = useState("black");

  const showCollar = (e) => {
    setChooseColor(e.target.value);
    setChooseSize("");
  };

  const addSizeToSelected = (e) => {
    setChooseSize((selected["size"] = e.target.value));
  };

  useEffect(() => {
    chooseColor &&
      setSelected(
        collarCollection.filter((collar) => collar.color === chooseColor)[0]
      );
  }, [chooseColor]);

  useEffect(() => {
    setProductId(
      (selected["checkout"] = { price: products_30_off(selected), quantity: 1 })
    );
    chooseSize && setSelected({ ...selected });
  }, [chooseSize]);

  return (
    <>
      {chooseColor && !displayProducts && (
        <div className={container}>
          <div className={img}>{selected.img}</div>
          <div>
            <ColorButtons selected={selected} showCollar={showCollar} />
            <SizeButtons
              selected={selected}
              addSizeToSelected={addSizeToSelected}
            />
            <AddMore
            productsToCheckout={productsToCheckout}
              selected={selected}
              finishAndPay={finishAndPay}
              pushCollarToArray={pushCollarToArray}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CollarOptions;
