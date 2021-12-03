import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import MediaQuery from "react-responsive";
import { navBar, burger, flex_nav_btn } from "./header.module.scss";
import Logo from "./components/logo";
import SubHeader from "./components/SubHeader/SubHeader";
import DesktopHeader from "./components/DesktopHeader";
import BurgerMenu from "./components/BurgerMenu";

const Header = () => {
  return (
    <>
      <MediaQuery maxWidth={900}>
        <header>
          <div className={navBar}>
            <div>
              <Link to="/collar-para-cuidar-mi-perro">
                <Logo />
              </Link>
            </div>
            <div className={flex_nav_btn}>
                <Link
                  style={{ color: "white" }}
                  id="book"
                  to="/reserva-collar-kolyy"
                >
                  <button>Reserva</button>
                </Link>
              <div className={burger}>
                <BurgerMenu />
              </div>
            </div>
          </div>
        </header>
      </MediaQuery>
      <MediaQuery minWidth={901}>
        <DesktopHeader />
      </MediaQuery>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
