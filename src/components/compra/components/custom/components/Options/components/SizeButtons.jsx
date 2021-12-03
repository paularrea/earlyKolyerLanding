import React, { useState } from "react";
import {
  buttons_container,
  buttons,
  size,
  flex_title,
} from "../../custom.module.scss";

const SizeButtons = ({ addSizeToSelected, selected, openModal }) => {
  return (
    <div className={buttons_container}>
      <div className={flex_title}>
        <p>2</p>
        <h5>Paso 2: tamaño</h5>
        <div
          style={{
            marginLeft:'1rem',
            fontSize: "12px",
            textDecoration: "underline",
            cursor: 'pointer'
          }}
          onClick={openModal}
        >
          Consulta las tallas
        </div>
      </div>
      <div className={buttons}>
        <button
          style={{
            background: selected.size && selected.size === "S" && "white",
            color: selected.size && selected.size === "S" && "black",
          }}
          className={size}
          onClick={addSizeToSelected}
          value="S"
        >
          S
        </button>
        <button
          style={{
            background: selected.size && selected.size === "M" && "white",
            color: selected.size && selected.size === "M" && "black",
          }}
          className={size}
          onClick={addSizeToSelected}
          value="M"
        >
          M
        </button>
        <button
          style={{
            background: selected.size && selected.size === "L" && "white",
            color: selected.size && selected.size === "L" && "black",
          }}
          className={size}
          onClick={addSizeToSelected}
          value="L"
        >
          L
        </button>
        <button
          style={{
            background: selected.size && selected.size === "XL" && "white",
            color: selected.size && selected.size === "XL" && "black",
          }}
          className={size}
          onClick={addSizeToSelected}
          value="XL"
        >
          XL
        </button>
      </div>
    </div>
  );
};

export default SizeButtons;
