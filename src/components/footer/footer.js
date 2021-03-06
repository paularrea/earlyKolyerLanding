import React from "react";
import Logo from "../header/components/logo";
import MediaQuery from "react-responsive";
import { Link } from "gatsby";
import { container, contact, media_container } from "./footer.module.scss";

import FooterDesktop from "./footerDesktop";
import Contacts from "./components/contacts";
import MediaList from "./components/mediaList";
import Privacity from "./components/privacity";
import PageLinks from "./components/pageLinks";

const Footer = () => {
  return (
    <>
      <MediaQuery maxWidth={800}>
        <div className={container}>
          <Link to="/collar-para-cuidar-mi-perro">
            <Logo />
          </Link>
          <p>
            Revoluciona la conexión con tu perro.
          </p>
          <PageLinks />
          <div className={contact}>
            <h3>
              ¿Tienes alguna pregunta?
            </h3>
            <Contacts />
          </div>
          <div className={media_container}>
            <h3>
              Síguenos en <b>@kolyy_official</b>
            </h3>
            <MediaList />
          </div>
          <Privacity />
        </div>
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <FooterDesktop />
      </MediaQuery>
    </>
  );
};

export default Footer;
