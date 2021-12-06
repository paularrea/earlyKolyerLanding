import React, { useEffect } from "react";
import Layout from "../components/layout/layout";
import { container } from "../styles/legal.module.scss";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className={container}>
        <h2>Términos y condiciones</h2>
        <p>
          descarga el pdf de términos y condiciones <a href="">aquí</a>
        </p>
      </div>
    </Layout>
  );
};

export default Terms;
