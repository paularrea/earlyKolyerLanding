import React, { useEffect } from "react";
import Layout from "../components/layout/layout";
import { container } from "../styles/legal.module.scss";

const Cookies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout>
      <div className={container}>
        <h2>Política completa de cookies</h2>
        <p>
          El editor de este sitio web utiliza cookies y/o tecnologías similares
          que almacenan y recuperan información cuando el usuario navega por el
          sitio web.
        </p>
        <h6>¿Qué son las cookies?</h6>
        <p>
          En general, estas tecnologías pueden servir para finalidades muy
          diversas como, por ejemplo, reconocer al usuario, obtener información
          sobre sus hábitos de navegación o personalizar la forma en que se
          muestra el contenido. Los usos concretos que hacemos de estas
          tecnologías se describen a continuación.{" "}
        </p>
        <h6>Tipo de cookies que se utilizan y su finalidad</h6>
        <h6>1.Cookies de análisis</h6>
        <p>
          Son aquellas que, tratadas por nosotros o por terceros, nos permiten
          cuantificar el número de usuarios y así realizar la medición y
          análisis estadístico de la utilización que hacen los usuarios del
          servicio ofertado. Para ello se analiza su navegación en nuestro sitio
          web con el fin de mejorar la oferta de productos y servicios que le
          ofrecemos.{" "}
        </p>
        <h6>2. Cookies publicitarias comportamentales</h6>
        <p>
          Son aquellas que, tratadas por nosotros o por terceros, nos permiten
          analizar sus hábitos de navegación en Internet para que podamos
          mostrarle publicidad relacionada con su perfil de navegación.{" "}
        </p>
        <h6>3. Cookies de preferencias o personalización</h6>
        <p>
          Son aquellas que, tratadas por nosotros o por terceros, permiten
          recordar la información para que el usuario acceda al servicio con
          determinadas características (idioma, contenido del servicio
          dependiendo del territorio desde el que se accede).{" "}
        </p>
        <h6>Declaración de cookies</h6>
        <p>Utilizamos las siguientes cookies propias y/o de terceros[2]:</p>
        <p>
          {" "}
          Cookies: Google Analytics (_ga) <br />
          Titular: Google <br />
          Finalidad: Análisis de la web. Por ejemplo, interacciones de los
          usuarios, tiempo de permanencia en el sitio web, etc. <br />
          Duración: 2 años <br />
          Más información:{" "}
          <a
            target="__blank"
            rel="noreferrer noopener"
            style={{ color: "#30AAAA", fontWeight: 400 }}
            href="https://developers.google.com/analytics/devguides/collection/gajs/cookie-usag"
          >
            https://developers.google.com/analytics/devguides/collection/gajs/cookie-usag
          </a>
        </p>
        <br /> <br />
        <p>
          {" "}
          Cookies: Guest_id
          <br />
          Titular: Twitter
          <br />
          Finalidad: Para identificar al usuario.
          <br />
          Duración: 2 años
          <br />
          Más información:
          <a
            target="__blank"
            rel="noreferrer noopener"
            style={{ color: "#30AAAA", fontWeight: 400 }}
            href="https://policies.google.com/technologies/types"
          >
            https://policies.google.com/technologies/types
          </a>
        </p>
        <br />
        <h6>
          Cómo aceptar, denegar, revocar el consentimiento o eliminar las
          cookies
        </h6>
        <p>
          Las cookies se pueden aceptar o bloquear, así como borrar los datos de
          navegación (incluyendo las cookies) desde el navegador que usted
          utiliza. Consulte las opciones e instrucciones que ofrece su navegador
          para ello. Tenga en cuenta que, si acepta las cookies de terceros,
          deberá eliminarlas desde las opciones del navegador. Por ejemplo:
        </p>
        <p>
          Explorer:
          <a
            target="__blank"
            rel="noreferrer noopener"
            style={{ color: "#30AAAA", fontWeight: 400 }}
            href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies"
          >
            https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies
          </a>
        </p>
        <p>
          {" "}
          Google Chrome:
          <a
            target="__blank"
            rel="noreferrer noopener"
            style={{ color: "#30AAAA", fontWeight: 400 }}
            href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=es "
          >
            https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies
          </a>
        </p>
        <p>
          {" "}
          Firefox:
          <a
            target="__blank"
            rel="noreferrer noopener"
            style={{ color: "#30AAAA", fontWeight: 400 }}
            href=" https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
          >
            https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies
          </a>
        </p>
        <p>
          {" "}
          Safari:
          <a
            target="__blank"
            rel="noreferrer noopener"
            style={{ color: "#30AAAA", fontWeight: 400 }}
            href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
          >
            https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies
          </a>
        </p>
        <h6>
          Transferencias de datos a terceros países realizadas por el editor{" "}
        </h6>
        <p>
          Puedes informarte de las transferencias a terceros países que, en su
          caso, realizan los terceros identificados en esta política de cookies
          en sus correspondientes políticas de privacidad.
          <br />
          <br />
          Última actualización: enero 2021
        </p>
      </div>
    </Layout>
  );
};

export default Cookies;
