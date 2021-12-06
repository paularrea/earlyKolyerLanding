import React from "react";
import { white_container, text, img } from "../about.module.scss";
import Logo from "./LogoImg";

const AboutWhiteContainer = () => {
  return (
    <div className={white_container}>
      <div className={img}>
        <Logo />
      </div>
      <div className={text}>
        <h3>Kolyy es la alternativa que te permite prevenir y anticipar.</h3>
        <p>
          Hemos creado un collar conectado a un App para aquellos amantes de los
          perros preocupados por su salud y bienestar. Una experiencia con la
          que puedan divertirse y disfrutar con la tranquilidad que debería ser
          tener un perro en la familia.
        </p>
        <p>
          De esta forma llegar a tiempo ante el desarrollo de posibles
          enfermedades y, sobre todo, mantenerlo activo y sano.
        </p>
        <p style={{ color: "#C4C4C4" }}>Pol y Miquel, fundadores de kolyy.</p>
      </div>
    </div>
  );
};

export default AboutWhiteContainer;
