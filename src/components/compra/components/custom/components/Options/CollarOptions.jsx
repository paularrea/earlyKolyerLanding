import React, { useState, useEffect } from "react";
import { container, img } from "../custom.module.scss";
import ColorButtons from "./components/ColorButtons";
import SizeButtons from "./components/SizeButtons";
import { collarCollection } from "../CollarCollection";
import { products_30_off } from "../../../../../../Stripe/products";
import AcceptButton from "./components/AcceptButton";

const CollarOptions = ({
  selected,
  setSelected,
  displayProducts,
  openModal,
  disabledButton,
  finishAndPay,
}) => {
  const [chooseSize, setChooseSize] = useState("");
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
              openModal={openModal}
              selected={selected}
              addSizeToSelected={addSizeToSelected}
            />
            <AcceptButton
              disabledButton={disabledButton}
              selected={selected}
              finishAndPay={finishAndPay}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CollarOptions;
