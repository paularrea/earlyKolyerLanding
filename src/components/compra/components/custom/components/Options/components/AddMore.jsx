import React from "react";
import { Link } from "react-scroll";
import { add_button } from "../../custom.module.scss";

const AddMore = ({ pushCollarToArray, selected, displayProducts }) => {
  return (
    <div>
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
            color: displayProducts.length >= 2 && "gray",
            border: displayProducts.length >= 2 && "1px solid gray",
          }}
          className={add_button}
          disabled={displayProducts.length >= 2}
          onClick={pushCollarToArray}
        >
          + añadir otro collar
        </button>
      </Link>
    </div>
  );
};

export default AddMore;
