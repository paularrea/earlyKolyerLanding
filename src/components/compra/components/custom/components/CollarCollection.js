import React from "react";
import BlackCollar from "../../../../LandingComponents/Specifications/components/ColorSwapper/BlackCollar";
import BlueCollar from "../../../../LandingComponents/Specifications/components/ColorSwapper/BlueCollar";
import YellowCollar from "../../../../LandingComponents/Specifications/components/ColorSwapper/RedCollar";

export const collarCollection = [
  {
    img: <BlackCollar />,
    color: "black",
    index: 1,
    bgColor:
      "radial-gradient(58.95% 46.94% at 50% 50%, #6F6F6F 0%, #434343 100%)",
    price_30_off: 147,
    price_33_off: 140.7,
    price_35_off: 136.33,
    price_before_30_discount: 210,
    price_before_33_discount: 210,
    price_before_35_discount: 210
  },
  {
    img: <BlueCollar />,
    color: "blue",
    index: 2,
    bgColor: "#3EADBF",
    price_30_off: 147,
    price_33_off: 140.7,
    price_35_off: 136.33,
    price_before_30_discount: 210,
    price_before_33_discount: 210,
    price_before_35_discount: 210
  },
  {
    img: <YellowCollar />,
    color: "yellow",
    index: 3,
    bgColor: "#744254",
    price_30_off: 147,
    price_33_off: 140.7,
    price_35_off: 136.33,
    price_before_30_discount: 210,
    price_before_33_discount: 210,
    price_before_35_discount: 210
  },
];
