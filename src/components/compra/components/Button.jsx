import { Link } from "gatsby";
import React from "react";
import { button } from "../compra.module.scss";

const Button = ({ children, to }) => {
  return (
    <Link to={to}>
      <button className={button}>{children}</button>
    </Link>
  );
};

export default Button;
