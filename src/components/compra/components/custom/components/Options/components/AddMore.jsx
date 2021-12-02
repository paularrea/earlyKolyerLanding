import React from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-scroll";
import { buttons_add, add_button_style } from "../../custom.module.scss";

const AddMore = ({ pushCollarToArray, selected }) => {
  return (
    <div className={buttons_add}>
      <div>
        <p>¿Quieres añadir otro collar?</p>
      </div>
      <Link
        activeClass="active"
        to="buy-collar"
        spy={true}
        smooth={true}
        offset={-150}
        duration={1000}
      >
        <button
          style={{
            color: selected && selected.size && !selected.size && "gray",
          }}
          className={add_button_style}
          disabled={selected && selected.size && !selected.size}
          onClick={pushCollarToArray}
        >
          Sí
        </button>
      </Link>
    </div>
  );
};

export default AddMore;
