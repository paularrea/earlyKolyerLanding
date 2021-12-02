import React from "react";
import { Link } from "react-scroll";
import {
  add_button, button
} from "../../custom.module.scss";

const AcceptButton = ({ finishAndPay, selected }) => {
  return (
      <div className={add_button}>
        <Link
          activeClass="active"
          to="go_to_checkout"
          spy={true}
          smooth={true}
          offset={-300}
          duration={1000}
        >
          <button
          className={button}
            style={{
              color: !selected.size && "gray",
              border: !selected.size && "1px solid gray",
            }}
            disabled={!selected.size}
            onClick={finishAndPay}
          >
            Añadir collar
          </button>
        </Link>
      </div>
  );
};

export default AcceptButton;
