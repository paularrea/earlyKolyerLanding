import React, { useState } from "react";
import {
  faqs_container,
  question,
  see_more,
  answer,
} from "../about.module.scss";

const FaQs = () => {
  const [open, setOpen] = useState(false);
  const [answerNumber, setAnswerNumber] = useState(false);

  const faqsCollection = [
    {
      index: 1,
      question: "¿Por qué existe una suscripción?",
      answer: "blabla",
    },
    {
      index: 2,
      question: "¿Qué es una pre-venta?",
      answer: "blabla",
    },
    {
      index: 3,
      question: "¿Cómo funciona la pre-venta?",
      answer: "blabla",
    },
    {
      index: 4,
      question: "¿Cuál es la política de devoluciones?",
      answer: "blabla",
    },
    {
      index: 5,
      question: "¿Puedo recibirlo antes?",
      answer: "blabla",
    },
    {
      index: 6,
      question: "¿Cuando se me empieza a cobrar la suscripción?",
      answer: "blabla",
    },
    {
      index: 7,
      question: "¿El collar es resistente al agua?",
      answer: "blabla",
    },
  ];

  const openFaq = (index) => {
    setAnswerNumber(index);
    setOpen(!open);
  };

  return (
    <div className={faqs_container}>
      <h2>FAQs</h2>
      <div>
        {faqsCollection.map((faq) => {
          return (
            <div
              index={faq.index}
              value={faq.index}
              onClick={() => openFaq(faq.index)}
            >
              <div className={question}>
                <p>{faq.question}</p>
                <p className={see_more}>+</p>
              </div>
              <p
                className={answer}
                style={{
                  display: answerNumber === faq.index && open ? "block" : "none",
                }}
              >
                {faq.answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaQs;
