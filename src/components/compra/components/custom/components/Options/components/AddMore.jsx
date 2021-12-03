import React from "react";
import { Link } from "react-scroll";
import { add_button } from "../../custom.module.scss";

const AddMore = ({ pushCollarToArray, selected }) => {
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
            color: selected && selected.size && !selected.size && "gray",
            border: selected && selected.size && !selected.size && "1px solid gray",
          }}
          className={add_button}
          disabled={selected && selected.size && !selected.size}
          onClick={pushCollarToArray}
        >
          + añadir otro collar
        </button>
      </Link>
    </div>
  );
};

export default AddMore;
