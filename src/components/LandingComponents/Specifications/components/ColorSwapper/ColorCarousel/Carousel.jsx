import React from "react";
import Carousel from "react-grid-carousel";
import YellowCollar from "../YellowCollar";
import BlueCollar from "../BlueCollar";
import BlackCollar from "../BlackCollar";
import "../../../../../../styles/carousel.css";
import { carousel_collars, img } from "../../../specifications.module.scss";

const CollarCarousel = ({ setBgColor }) => {
  const collarCollection = [
    {
      index: 1,
      img: <YellowCollar />,
      bgColor: "#744254",
    },
    {
      index: 2,
      img: <BlackCollar />,
      bgColor: "#434343",
    },
    {
      index: 3,
      img: <BlueCollar />,
      bgColor: "#43A0B0",
    },
  ];
  return (
    <div className={carousel_collars}>
      <Carousel
        cols={1}
        rows={1}
        gap={20}
        autoplay={4000}
        loop
        showDots
        dotColorActive="#21A7AA"
      >
        {collarCollection.map((collar) => {
          return (
            <Carousel.Item key={collar.index}>
              <div className={img}>{collar.img}</div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CollarCarousel;
