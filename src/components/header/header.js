import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import MediaQuery from "react-responsive";
import { navBar, burger, flex_nav_btn } from "./header.module.scss";
import Logo from "./components/logo";
import SubHeader from "./components/SubHeader/SubHeader";
import DesktopHeader from "./components/DesktopHeader";
import BurgerMenu from "./components/BurgerMenu";

const Header = () => {
  const [buyButton, setBuyButton] = useState(false);

  useEffect(() => {
    const isEarlyKolyer = () => {
      const currentURL = window.location.href;
      currentURL.indexOf("early-kolyer") > -1 && setBuyButton(true);
    };
    isEarlyKolyer();
  }, []);

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
              {buyButton ? (
                <Link
                  style={{ color: "white" }}
                  id="comprar"
                  to="/comprar-collar-kolyy"
                >
                  <button>Comprar Ya</button>
                </Link>
              ) : (
                <Link
                  style={{ color: "white" }}
                  id="book"
                  to="/reserva-collar-kolyy"
                >
                  <button>Reserva</button>
                </Link>
              )}
              <div className={burger}>
                <BurgerMenu />
              </div>
            </div>
          </div>
          {buyButton && <SubHeader />}
        </header>
      </MediaQuery>
      <MediaQuery minWidth={901}>
        <DesktopHeader buyButton={buyButton} />
      </MediaQuery>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
