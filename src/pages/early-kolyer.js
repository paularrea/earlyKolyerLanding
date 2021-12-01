import React, { useEffect } from "react";
import About from "../components/LandingComponents/About/About";
import Contact from "../components/LandingComponents/Contact/Contact";
import Intro from "../components/LandingComponents/Collar/Intro";
import Specifications from "../components/LandingComponents/Specifications/Specifications";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";

const EarlyKolyer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Seo title="Collar para cuidar mi perro" />
      <Intro />
      <Specifications />
      <About />
      <Contact />
    </Layout>
  );
};

export default EarlyKolyer;
