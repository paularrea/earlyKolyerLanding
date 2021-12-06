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
          Descarga el pdf de términos y condiciones{" "}
          <b>
            <a
              style={{ color: "#30AAAA" }}
              rel="noreferrer"
              target="_blank"
              href="/src/terms/condiciones_de_venta_kolyy_2021.pdf"
              download
            >
              aquí
            </a>
          </b>
        </p>
      </div>
    </Layout>
  );
};

export default Terms;
