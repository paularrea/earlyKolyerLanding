import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
export const getStripe = () => {
  let STRIPE_PUBLISHABLE_KEY = process.env.GATSBY_STRIPE_PUBLISHABLE_KEY;
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};
