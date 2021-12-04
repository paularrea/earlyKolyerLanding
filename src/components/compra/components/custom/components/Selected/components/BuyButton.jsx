import React from "react";
import { buy_button_container, button } from "../../custom.module.scss";

const BuyButton = ({ displayProducts, stripeUrl }) => {
  const priceForOneCollar = displayProducts.length === 1 && "147";
  const priceForTwoCollar = displayProducts.length === 2 && "281,40";
  const oneCollarBeforeDiscount = displayProducts.length === 1 && "210";
  const twoCollarBeforeDiscount = displayProducts.length === 2 && "420";

  return (
    <div className={buy_button_container}>
      {displayProducts.length ? (
        <>
          <div>
            <h5>
              €{priceForOneCollar || priceForTwoCollar}{" "}
              <span>{oneCollarBeforeDiscount || twoCollarBeforeDiscount}</span>
            </h5>
            <p>IVA incl.</p>
          </div>

          <a
            rel="noreferrer"
            target="_blank"
            className={button}
            href={stripeUrl}
          >
            Comprar
          </a>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default BuyButton;
