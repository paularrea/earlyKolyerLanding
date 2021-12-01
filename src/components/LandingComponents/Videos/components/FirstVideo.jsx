import React from "react";
import { video_container, title_abs } from "../videos.module.scss";
import BgVideo1 from "./BgVideo1";

const FirstVideo = () => {
  return (
      <div style={{ backgroundColor: "#434343" }} className={video_container}>
        <div className={title_abs}>
          <h1>COMPARTE TU EJERCICIO CON TU PERRO</h1>
        </div>
      </div>
  );
};

export default FirstVideo;
