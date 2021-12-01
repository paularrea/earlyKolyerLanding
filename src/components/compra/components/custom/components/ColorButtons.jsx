import React from "react";
import {
  buttons_container,
  buttons,
  black,
  blue,
  yellow,
  flex_title,
} from "../custom.module.scss";

const ColorButtons = ({ showCollar, selected }) => {
  return (
    <div className={buttons_container}>
      <div className={flex_title}>
        <p>1</p>
        <h5>Paso 1: color</h5>
      </div>

      <div className={buttons}>
        <button className={black} style={{border: selected.color === 'black' && '4px solid white'}} onClick={showCollar} value="black"></button>
        <button className={blue} style={{border: selected.color === 'blue' && '4px solid white'}} onClick={showCollar} value="blue"></button>
        <button className={yellow} style={{border: selected.color === 'yellow' && '4px solid white'}} onClick={showCollar} value="yellow"></button>
      </div>
    </div>
  );
};

export default ColorButtons;
