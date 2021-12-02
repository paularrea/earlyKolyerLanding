import React, { useEffect } from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Seo title="Collar para cuidar mi perro" />
    </Layout>
  );
};

export default Home;
