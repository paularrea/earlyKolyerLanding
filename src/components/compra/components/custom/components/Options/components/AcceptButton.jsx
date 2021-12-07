import React from "react";
import { Link } from "react-scroll";
import { add_button } from "../../custom.module.scss";

const AcceptButton = ({ finishAndPay, disabledButton }) => {
  console.log(disabledButton, 'button')
  return (
    <div style={{ padding: "0 5vw 2rem 5vw" }}>
      <Link
        activeClass="active"
        to="go_to_checkout"
        spy={true}
        smooth={true}
        offset={-400}
        duration={1000}
      >
        <button
          style={{
            color: disabledButton && "gray",
            border: disabledButton && "1px solid gray",
          }}
          disabled={disabledButton}
          className={add_button}
          onClick={finishAndPay}
        >
          añadir collar
        </button>
      </Link>
    </div>
  );
};

export default AcceptButton;
