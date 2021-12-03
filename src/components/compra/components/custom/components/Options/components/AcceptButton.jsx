import React from "react";
import { Link } from "react-scroll";
import { finish_selection_button } from "../../custom.module.scss";

const AcceptButton = ({ finishAndPay, selected }) => {
  return (
    <div style={{padding:'0 5vw 2rem 5vw'}}>
      <Link
        activeClass="active"
        to="go_to_checkout"
        spy={true}
        smooth={true}
        offset={-300}
        duration={1000}
      >
        <button
          className={finish_selection_button}
          style={{
            color: !selected.size && "gray",
            border: !selected.size && "1px solid gray",
          }}
          disabled={!selected.size}
          onClick={finishAndPay}
        >
          Finalizar selección
        </button>
      </Link>
    </div>
  );
};

export default AcceptButton;
