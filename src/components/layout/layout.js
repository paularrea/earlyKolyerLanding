import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]');
  }

  return (
    <>
      <Header siteTitle={`Collar para cuidar mi perro`} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
