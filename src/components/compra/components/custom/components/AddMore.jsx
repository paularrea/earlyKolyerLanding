import React from "react";
import { buttons_container, buttons_add, flex_title } from "../custom.module.scss";

const AddMore = ({ pushCollarToArray, finishAndPay, selected }) => {
  return (
    <div className={buttons_container}>
      <div className={flex_title}>
        <p>3</p>
        <h5>¿Quieres añadir otro collar?</h5>
      </div>
      <div className={buttons_add}>
        <button disabled={!selected.size} onClick={pushCollarToArray}>Sí</button>
        <button onClick={finishAndPay}>No</button>
      </div>
    </div>
  );
};

export default AddMore;
