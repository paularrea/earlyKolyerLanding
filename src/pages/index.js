import React, { useEffect } from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import SectionScroll from "../components/homeComponents/scrollSections/sectionScroll";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Seo title="Collar para cuidar mi perro" />
      <SectionScroll />
    </Layout>
  );
};

export default Home;
