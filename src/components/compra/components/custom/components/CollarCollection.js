import React from "react";
import BlackCollar from "../../../../LandingComponents/Specifications/components/ColorSwapper/BlackCollar";
import BlueCollar from "../../../../LandingComponents/Specifications/components/ColorSwapper/BlueCollar";
import RedCollar from "../../../../LandingComponents/Specifications/components/ColorSwapper/RedCollar";

export const collarCollection = [
  {
    img: <BlackCollar />,
    color: "black",
    index: 1,
    bgColor:
      "radial-gradient(58.95% 46.94% at 50% 50%, #6F6F6F 0%, #434343 100%)",
  },
  {
    img: <BlueCollar />,
    color: "blue",
    index: 2,
    bgColor: "#3EADBF",
  },
  {
    img: <RedCollar />,
    color: "red",
    index: 3,
    bgColor: "#744254",
  },
];
