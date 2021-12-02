import React, { useEffect, useState } from "react";
import {
  selection_container,
  user_selection,
  value,
  flex,
  flex_container,
  close_btn,
} from "../custom.module.scss";
import BuyButton from "./components/BuyButton";

const SelectedOptions = ({
  setProductsToCheckout,
  setDisplayProducts,
  productsToCheckout,
  displayProducts,
  finished,
  setFinished,
  sentToStripe,
  pushCollarToArray
}) => {
  const [filteredToCheckout, setFilteredToCheckout] = useState(
    productsToCheckout
  );
  const [filteredToSelection, setFilteredToSelection] = useState(
    displayProducts
  );

  const removeProduct = (productId) => {
    setFilteredToCheckout(
      productsToCheckout.filter((id) => id.price !== productId)
    );
    setFilteredToSelection(
      displayProducts.filter((product) => product.checkout.price !== productId)
    );
  };

  useEffect(() => {
    setProductsToCheckout(filteredToCheckout);
    setDisplayProducts(filteredToSelection);
  }, [filteredToCheckout]);

  return (
    <div id="go_to_checkout" className={selection_container}>
      <div className={user_selection}>
        <h5>Tu selección:</h5>
        {displayProducts.map((product) => {
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
                value={product.checkout.price}
                onClick={() => removeProduct(product.checkout.price)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
      <BuyButton
      pushCollarToArray={pushCollarToArray}
        sentToStripe={sentToStripe}
        setFinished={setFinished}
        finished={finished}
        displayProducts={displayProducts}
        productsToCheckout={productsToCheckout}
      />
    </div>
  );
};

export default SelectedOptions;
