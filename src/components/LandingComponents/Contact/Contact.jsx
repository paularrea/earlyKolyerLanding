import React from "react";
import { container, flex_container } from "./contact.module.scss";
import ContactForm from "./components/Form";
import Buttons from "./components/Buttons/Buttons";

const Contact = () => {
  return (
    <div id="contacto" className={container}>
      <h2 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
        Contacta
      </h2>
      <div
        data-sal="fade"
        data-sal-delay="100"
        data-sal-duration="1000"
        className={flex_container}
      >
        <div>
          <ContactForm />
        </div>
        <div>
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default Contact;
