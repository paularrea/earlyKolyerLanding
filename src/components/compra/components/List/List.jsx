import React from "react";
import { list_container } from "./list.module.scss";

const List = () => {
  const lista = [
    {
      index:1,
      title: "1. PROTÉGELO",
      text: "Vive tranquilo, con el collar no podrás perderlo.",
    },
    {
      index:2,
      title: "2. CUÍDALO",
      text:
        "Controla su ejercicio y su peso y anticípate a sus posibles problemas.",
    },
    {
      index:3,
      title: "3. DIVIÉRTETE",
      text: "Actívate con él y disfruta del ejercicio juntos.",
    },
  ];
  return (
    <div className={list_container}>
      {lista.map((item) => {
        return (
          <div key={item.index}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
