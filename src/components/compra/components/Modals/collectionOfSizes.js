import React from "react";
import ImgTallaS from "./img/ImgTallaS";
import ImgTallaM from "./img/ImgTallaM";
import ImgTallaL from "./img/ImgTallaL";
import ImgTallaXL from "./img/ImgTallaXL";

export const collectionOfSizes = [
  {
    index: 1,
    img: <ImgTallaS/>,
    title: "Talla S:",
    subTitle: "Perros pequeños",
    text: "Dachshund, Bulldog Francés, Jack Russell Terrier, Mini Aussie...",
    size: "28 x 33 cm",
  },
  {
    index: 1,
    img: <ImgTallaM />,
    title: "Talla M:",
    subTitle: "Perros medianos",
    text: "Aussie, Beagle, Border Collie, Corgi, Bulldog Inglés...",
    size: "33 x 43 cm",
  },
  {
    index: 1,
    img: <ImgTallaL />,
    title: "Talla L:",
    subTitle: "Perros grandes",
    text: "Boxer, Doberman, German Shepherd, Golden Retriever, Pit Bull...",
    size: "43 x 48 cm",
  },
  {
    index: 1,
    img: <ImgTallaXL />,
    title: "Talla XL:",
    subTitle: "Perros maxi",
    text:
      "Mastín Español, Gran Danés, San Bernardo, Mastiff, Terranova, Rottweiler...",
    size: "58 x 86 cm",
  },
];
