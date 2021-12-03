import React, { useEffect } from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import Compra from "../components/compra/Compra";
import EarlyHeader from "../components/header/EarlyHeader";
import EarlyFooter from "../components/footer/EarlyFooter";

const CheckoutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <EarlyHeader />
      <Seo title="Compra" />
      <Compra />
      <EarlyFooter/>
    </>
  );
};

export default CheckoutPage;
