import React, { useState } from "react";
import { getStripe } from "./Stripe";
import { button } from "./stripe.module.scss";

const Checkout = ({ productsToCheckout, finished }) => {
  const [loading, setLoading] = useState(false);

  const redirectToCheckout = async (event) => {
    event.preventDefault();
    setLoading(true);
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: productsToCheckout,
      successUrl: `https://testlanding.kolyy.com/`,
      cancelUrl: `https://testlanding.kolyy.com/comprar-collar-kolyy/`,
    });
    if (error) {
      console.warn("Error:", error);
      setLoading(false);
    }
  };

  return (
    <button
      className={button}
      style={{
        backgroundColor: !finished && "gray",
        boxShadow: !finished && "0px 0px 13px gray",
      }}
      disabled={loading && !finished ? true : false}
      onClick={redirectToCheckout}
    >
      Comprar
    </button>
  );
};

export default Checkout;
