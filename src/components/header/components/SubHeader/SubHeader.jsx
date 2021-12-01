import React from "react";
import { Link } from "react-scroll";
import { sub_header_nav } from "./subHeader.module.scss";

const SubHeader = () => {
  return (
    <nav className={sub_header_nav}>
      <Link
        activeClass="active"
        to="el-collar"
        spy={true}
        smooth={true}
        offset={-40}
        duration={1000}
      >
        El collar
      </Link>
      <Link
        activeClass="active"
        to="especificaciones"
        spy={true}
        smooth={true}
        offset={-40}
        duration={1000}
      >
        Especificaciones
      </Link>
      <Link
        activeClass="active"
        to="kolyy"
        spy={true}
        smooth={true}
        offset={-40}
        duration={1000}
      >
        Kolyy
      </Link>
      <Link
        activeClass="active"
        to="contacto"
        spy={true}
        smooth={true}
        offset={-40}
        duration={1000}
      >
        Contacto
      </Link>
    </nav>
  );
};

export default SubHeader;
