import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import MediaQuery from "react-responsive";
import { navBar, burger, flex_nav_btn } from "./header.module.scss";
import Logo from "./components/logo";
import SubHeader from "./components/SubHeader/SubHeader";
import EarlyDesktopHeader from "./components/EarlyDesktopHeader";

const EarlyHeader = () => {
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
              <Link to="/early-kolyer">
                <Logo />
              </Link>
            </div>
            <div style={{marginRight:'5vw'}} className={flex_nav_btn}>
              <Link
                style={{ color: "white" }}
                id="comprar"
                to="/comprar-collar-kolyy"
              >
                <button>Comprar Ya</button>
              </Link>
            </div>
          </div>
          {buyButton && <SubHeader />}
        </header>
      </MediaQuery>
      <MediaQuery minWidth={901}>
        <EarlyDesktopHeader buyButton={buyButton} />
      </MediaQuery>
    </>
  );
};

EarlyHeader.propTypes = {
  siteTitle: PropTypes.string,
};

export default EarlyHeader;
