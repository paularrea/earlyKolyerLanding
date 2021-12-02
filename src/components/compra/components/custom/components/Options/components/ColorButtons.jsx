import React from "react";
import {
  buttons,
  black,
  blue,
  yellow,
} from "../../custom.module.scss";

const numStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: 0,
  marginRight: ".5rem",
  border: "1px solid white",
  padding: ".2rem",
  borderRadius: "100px",
  minWidth: "25px",
  width: "25px !important",
  height: "25px !important",
  fontSize: "14px",
};

const ColorButtons = ({ showCollar, selected }) => {
  return (
    <div
      style={{
        width: "auto",
        padding: "0 2rem 2rem 2rem",
        margin: "0 auto",
      }}
    >
        <div
          style={{ display: "flex", paddingBottom: "1rem" }}
        >
          <p style={numStyle}>1</p>
          <h5 style={{ fontWeight: 600, fontSize: "18px", lineHeight: "22px" }}>
            Paso 1: color
          </h5>
        </div>

        <div className={buttons}>
          <button
            className={black}
            style={{ border: selected.color === "black" && "4px solid white" }}
            onClick={showCollar}
            value="black"
          ></button>
          <button
            className={blue}
            style={{ border: selected.color === "blue" && "4px solid white" }}
            onClick={showCollar}
            value="blue"
          ></button>
          <button
            className={yellow}
            style={{ border: selected.color === "yellow" && "4px solid white" }}
            onClick={showCollar}
            value="yellow"
          ></button>
        </div>
      </div>
  );
};

export default ColorButtons;
