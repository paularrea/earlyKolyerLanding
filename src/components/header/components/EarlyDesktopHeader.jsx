import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
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
import SubHeader from "./SubHeader/SubHeader";

const EarlyDesktopHeader = ({ buyButton }) => {
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
    <header>
      <div className={navBar}>
        <nav className={logo_nav_container}>
          <Link id="logo" to="/early-kolyer">
            <Logo />
          </Link>
        </nav>
        <Link id="compra" to="/comprar-collar-kolyy">
          <button className={button_header}>Comprar Ya</button>
        </Link>
      </div>
      {buyButton && <SubHeader />}
    </header>
  );
};

EarlyDesktopHeader.propTypes = {
  siteTitle: PropTypes.string,
};

export default EarlyDesktopHeader;
