import React, { useEffect, useState } from "react";
import { getStripe } from "./Stripe";
import { button } from "./stripe.module.scss";

const Checkout = ({ sentToStripe, finished, setFinished }) => {
  const [loading, setLoading] = useState(false);

  const redirectToCheckout = async (event) => {
    event.preventDefault();
    setLoading(true);
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      shippingAddressCollection: {
        allowedCountries: ["ES"],
      },
      locale: "es",
      lineItems: sentToStripe,
      successUrl: `https://kolyy-landing.netlify.app`,
      cancelUrl: `https://kolyy-landing.netlify.app/comprar-collar-kolyy/`,
    });
    if (error) {
      console.warn("Error:", error);
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   !sentToStripe.length ? setFinished(false) : setFinished(true);
  // }, [sentToStripe]);

  return (
    <button
      className={button}
      style={{
        backgroundColor: !finished && "gray",
        boxShadow: !finished && "0px 0px 13px gray",
      }}
      disabled={loading && finished ? true : false}
      onClick={redirectToCheckout}
    >
      Comprar
    </button>
  );
};

export default Checkout;
