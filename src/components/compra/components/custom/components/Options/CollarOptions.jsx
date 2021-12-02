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
    // <MediaQuery maxWidth={870}>
    <>
      {chooseColor && !displayProducts && (
        <div style={{ background: selected.bgColor }} className={container}>
          <div className={img}>{selected.img}</div>
          <h3
            style={{
              padding: "1rem 0 2rem 0",
              textAlign: "center",
              fontWeight: 800,
              fontSize: "20px",
              lineHeight: "24px",
            }}
          >
            Personaliza tu Kolyy
          </h3>
          <ColorButtons selected={selected} showCollar={showCollar} />
          <SizeButtons
            selected={selected}
            addSizeToSelected={addSizeToSelected}
          />
          <AddMore
            selected={selected}
            finishAndPay={finishAndPay}
            pushCollarToArray={pushCollarToArray}
          />
        </div>
      )}
      </>
    // </MediaQuery>
  );
};

export default CollarOptions;
