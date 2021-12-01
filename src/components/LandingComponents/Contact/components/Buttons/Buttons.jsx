import React from "react";
import PhoneImg from "./PhoneImg";
import MailImg from "./MailImg";
import { buttons_container, text, content } from "./buttons.module.scss";

const Buttons = () => {
  return (
    <section className={buttons_container}>
      <div className={content}>
        <a href="tel:+34647826369">
        <PhoneImg />
          <div className={text}>
            <h4>Llámanos</h4>
            <p>+34 647 82 63 69 </p>
          </div>
        </a>
      </div>
      <div className={content}>
        <a href="mailto:team@kolyy.com" rel="noreferrer" target="_blank">
        <MailImg />
          <div className={text}>
            <h4>Escríbenos</h4>
            <p>team@kolyy.com</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Buttons;
