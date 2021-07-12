import React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import Form from "../components/questionsComponents/formComponent";
import Faqs from "../components/questionsComponents/faqsComponent";
import MediaQuery from "react-responsive";
import { bg_img, content } from "../styles/questions.module.scss";
import MediaFixed from "../components/questionsComponents/mediaFixed";
import ContactImg from "../components/questionsComponents/contactBackgroundImg";

const Questions = () => {
  return (
    <Layout>
      <Seo title="Contacto" />
      <MediaQuery minWidth={1000}>
        <MediaFixed />
      </MediaQuery>
      <ContactImg>
        <div className={bg_img}>
          <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000" className={content}>
            <h2>¿Tienes alguna pregunta?</h2>
          </div>
        </div>
      </ContactImg>
      <Form />
      <Faqs />
    </Layout>
  );
};

export default Questions;
