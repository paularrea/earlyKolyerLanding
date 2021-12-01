import React from "react";
import { container, flex_container } from "./contact.module.scss";
import ContactForm from "./components/Form";
import Buttons from "./components/Buttons/Buttons";

const Contact = () => {
  return (
    <div id="contacto" className={container}>
      <h2>Contacta</h2>
      <div className={flex_container}>
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
