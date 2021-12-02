import React, { useState, useEffect } from "react";
import Checkout from "../../../../../../../Stripe/checkout";
import { buy_button_container } from "../../custom.module.scss";
import AddMore from "../../Options/components/AddMore";

const BuyButton = ({
  selected,
  pushCollarToArray,
  displayProducts,
  finished,
  setFinished,
  sentToStripe,
}) => {
  const [total, setTotal] = useState(0);
  const [totalBeforeDiscount, setTotalBeforeDiscount] = useState(0);

  useEffect(() => {
    setTotal(
      displayProducts.length !== 0 &&
        displayProducts.reduce((prev, cur) => prev + cur.price_30_off, 0)
    );
    setTotalBeforeDiscount(
      displayProducts.length !== 0 &&
        displayProducts.reduce(
          (prev, cur) => prev + cur.price_before_30_discount,
          0
        )
    );
  }, [displayProducts]);

  return (
    <div className={buy_button_container}>
      <div>
        <h5>
          €{total} <span>{total && totalBeforeDiscount}</span>
        </h5>
        <p>IVA incl.</p>
      </div>
      <AddMore selected={selected} pushCollarToArray={pushCollarToArray} />
      <Checkout
        setFinished={setFinished}
        finished={finished}
        sentToStripe={sentToStripe}
      />
    </div>
  );
};

export default BuyButton;
