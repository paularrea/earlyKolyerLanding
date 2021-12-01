import React from "react";
import {
  cards_container,
  card_container,
  green_price,
  img,
  button,
  text,
  decimal,
  flex,
  ahorro,
} from "./cards.module.scss";
import OneCollar from "./img/OneCollar";
import TwoCollar from "./img/TwoCollar";
import ThreeCollar from "./img/ThreeCollar";
import { Link } from "react-scroll";

const Cards = () => {
  const cardsCollection = [
    {
      index: 1,
      img: <OneCollar />,
      deal: "-30%",
      ahorro: "Ahorras 63€",
      text: "Compra el primer collar inteligente del mercado.",
      price: "€147",
      before: "€210",
    },
    {
      index: 2,
      img: <TwoCollar />,
      deal: "-33%",
      ahorro: "Ahorras 147€",
      text: "Dos collares inteligentes para tus perros.",
      price: "€281",
      decimal: ",40",
      before: "€420",
    },
    {
      index: 3,
      img: <ThreeCollar />,
      deal: "-35%",
      ahorro: "Ahorras 252€",
      text: "Tres collares inteligentes a un precio único.",
      price: "€409",
      before: "€630",
    },
  ];
  return (
    <div className={cards_container}>
      <h2>Packs Early kolyer</h2>
      <p>
        Sé el primero en disfrutar de la tecnología kolyy con un descuento de
        hasta el 35%.
      </p>
      <div className={flex}>
        {cardsCollection.map((card) => {
          return (
            <div key={card.index} className={card_container}>
              <div className={img}>{card.img}</div>
              <div>
                <div className={green_price}>
                  <h5>{card.deal}</h5>
                  <p className={ahorro}>{card.ahorro}</p>
                </div>
                <p className={text}>{card.text}</p>
                <h3>
                  {card.price}
                  <p className={decimal}>
                    {card.decimal && card.decimal}
                    <span>{card.before}</span>
                  </p>
                </h3>
                <p>IVA incl.</p>
                <Link
                  activeClass="active"
                  to="buy-collar"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  <button className={button}>Comprar</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
