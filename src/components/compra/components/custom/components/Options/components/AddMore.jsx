import React from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-scroll";
import {
  buttons_container,
  buttons_add,
  flex_title,
  add_button_style,
} from "../../custom.module.scss";

const AddMore = ({
  pushCollarToArray,
  finishAndPay,
  selected,
}) => {
  return (
    <div className={buttons_container}>
      <div className={flex_title}>
        <p>3</p>
        <h5>¿Quieres añadir otro collar?</h5>
      </div>
      <div className={buttons_add}>
        <MediaQuery maxWidth={870}>
          <Link
            activeClass="active"
            to="buy-collar"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <button
              className={add_button_style}
              disabled={!selected.size}
              onClick={pushCollarToArray}
            >
              Sí
            </button>
          </Link>
        </MediaQuery>
        <MediaQuery minWidth={870}>
          <Link
            activeClass="active"
            to="buy-collar"
            spy={true}
            smooth={true}
            offset={-200}
            duration={1000}
          >
            <button
              style={{
                color: !selected.size && "gray",
                border: !selected.size && "1px solid gray",
              }}
              className={add_button_style}
              disabled={!selected.size}
              onClick={pushCollarToArray}
            >
              Sí
            </button>
          </Link>
        </MediaQuery>
        <Link
          activeClass="active"
          to="go_to_checkout"
          spy={true}
          smooth={true}
          offset={-300}
          duration={1000}
        >
          <button
            style={{
              color: !selected.size && "gray",
              border: !selected.size && "1px solid gray",
            }}
            disabled={!selected.size}
            className={add_button_style}
            onClick={finishAndPay}
          >
            No
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddMore;
