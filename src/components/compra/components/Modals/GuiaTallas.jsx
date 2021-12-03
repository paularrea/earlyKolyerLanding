import React from "react";
import {
  shadow_container,
  container,
  flex_container,
  info_container,
  img,
  close_btn,
} from "./modal.module.scss";
import { collectionOfSizes } from "./collectionOfSizes";

const GuiaTallas = ({ openModal }) => {
  return (
    <div onClick={openModal} className={shadow_container}>
      <div className={container}>
        <h3>Guía de tallas</h3>
        <div className={close_btn} onClick={openModal}>
          X
        </div>
        <div className={flex_container}>
          {collectionOfSizes.map((item) => {
            return (
              <div className={info_container}>
                <div className={img}>{item.img}</div>
                <div>
                  <p>
                    <b>{item.title}</b>
                  </p>
                  <p>{item.subTitle}</p>
                  <br />
                  <p>{item.text}</p>
                  <br />
                  <p>{item.size}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GuiaTallas;
