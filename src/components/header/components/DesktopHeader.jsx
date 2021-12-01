import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "../../Link";
// import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import {
  header,
  header_out,
  active,
  active_white,
  navBar,
  menu_fijo,
  menu_fijo_out,
  logo_nav_container,
  login_link,
  button_header,
} from "../header.module.scss";
import Logo from "./logo";

const DesktopHeader = ({buyButton}) => {
  const [activeCollar, setActiveCollar] = useState(false);
  const [activePlacas, setActivePlacas] = useState(false);
  const [activeAbout, setActiveAbout] = useState(false);
  const [activeBlog, setActiveBlog] = useState(false);
  const [activeDoggipedia, setActiveDoggipedia] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState(false);
  const [hideBlackNav, setHideBlackNav] = useState(false);

  useEffect(() => {
    const changeNavColor = () => {
      if (window.scrollY < (5 * window.innerHeight) / 100) {
        setHideBlackNav(false);
      } else {
        setHideBlackNav(true);
      }
    };
    const isActive = () => {
      const currentURL = window.location.href;
      if (currentURL.indexOf("collar-perro-gps") > -1) {
        setActiveCollar(true);
      } else if (currentURL.indexOf("0perrosperdidos") > -1) {
        setActivePlacas(true);
      } else if (currentURL.indexOf("mundo-kolyy") > -1) {
        setActiveAbout(true);
      } else if (currentURL.indexOf("blog-para-perros") > -1) {
        setActiveBlog(true);
      } else if (currentURL.indexOf("contacto") > -1) {
        setActiveQuestions(true);
      } else if (currentURL.indexOf("razas-de-perro") > -1) {
        setActiveDoggipedia(true);
      }
    };
    isActive();
    window.addEventListener("scroll", changeNavColor);
  }, []);

  return (
    <header className={hideBlackNav ? header_out : header}>
      <nav className={hideBlackNav ? menu_fijo_out : menu_fijo}>
        <Link
          id="razas-de-perro"
          to="/razas-de-perro"
          className={activeDoggipedia && active_white}
        >
          Conoce a tu perro
        </Link>

        <Link
          id="blog"
          to="/blog-para-perros"
          className={activeBlog && active_white}
        >
          Blog
        </Link>
        <Link
          id="contacto"
          to="/contacto"
          className={activeQuestions && active_white}
        >
          Pregúntanos
        </Link>
      </nav>
      <div className={navBar}>
        <nav className={logo_nav_container}>
          <Link id="logo" to="/collar-para-cuidar-mi-perro">
            <Logo />
          </Link>

          <Link
            id="collar-perro"
            to="/collar-perro-gps"
            className={activeCollar && active}
          >
            Collar
          </Link>

          <Link
            id="0perrosperdidos"
            to="/0perrosperdidos"
            className={activePlacas && active}
          >
            #0perrosperdidos
          </Link>

          <Link
            id="sobre-nosotros"
            to="/mundo-kolyy"
            className={activeAbout && active}
          >
            {" "}
            Mundo Kolyy
          </Link>
        </nav>
        <div>
          <a
            className={login_link}
            href="https://app.kolyy.com/"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <button
              style={{
                backgroundColor: "#D9DADD",
                color: "black",
                fontSize: "16px",
              }}
            >
              Inicia sesión
            </button>
          </a>
          {buyButton ? (
            <Link id="compra" to="/comprar-collar-kolyy">
              <button className={button_header}>Comprar Ya</button>
            </Link>
          ) : (
            <Link id="reserva" to="/reserva-collar-kolyy">
              <button className={button_header}>Reserva</button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

DesktopHeader.propTypes = {
  siteTitle: PropTypes.string,
};

export default DesktopHeader;
