import React, { useEffect } from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import Compra from "../components/compra/Compra";

const CheckoutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Seo title="Compra" />
      <Compra />
    </Layout>
  );
};

export default CheckoutPage;
