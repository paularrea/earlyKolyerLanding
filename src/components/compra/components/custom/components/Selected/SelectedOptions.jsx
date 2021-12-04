import React, { useEffect, useState } from "react";
import {
  selection_container,
  user_selection,
  value,
  flex,
  flex_container,
  close_btn,
} from "../custom.module.scss";
import AddMore from "../Options/components/AddMore";
import BuyButton from "./components/BuyButton";

const SelectedOptions = ({
  setDisplayProducts,
  displayProducts,
  finished,
  setFinished,
  pushCollarToArray,
  selected,
  stripeUrl,
}) => {
  const [filteredToSelection, setFilteredToSelection] = useState(
    displayProducts
  );

  const removeProduct = (currentProduct) => {
    setFilteredToSelection(
      displayProducts.filter(
        (product) => product.color + product.size !== currentProduct
      )
    );
  };

  useEffect(() => {
    setDisplayProducts(filteredToSelection);
  }, [filteredToSelection]);

  return (
    <div id="go_to_checkout" className={selection_container}>
      <div className={user_selection}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h5>Tu selección:</h5>
          <AddMore
            displayProducts={displayProducts}
            selected={selected}
            pushCollarToArray={pushCollarToArray}
          />
        </div>

        {displayProducts &&
          displayProducts.map((product) => {
            return (
              <div className={flex_container}>
                <div className={flex}>
                  <p>Color</p>
                  <div
                    style={{ background: product.bgColor }}
                    className={value}
                  ></div>
                </div>
                <div className={flex}>
                  <p>Talla</p>
                  <div className={value}>{product.size && product.size}</div>
                </div>
                <button
                  className={close_btn}
                  value={product.color + product.size}
                  onClick={() => removeProduct(product.color + product.size)}
                >
                  X
                </button>
              </div>
            );
          })}
      </div>
      <BuyButton
        stripeUrl={stripeUrl}
        setFinished={setFinished}
        finished={finished}
        displayProducts={displayProducts}
      />
    </div>
  );
};

export default SelectedOptions;
