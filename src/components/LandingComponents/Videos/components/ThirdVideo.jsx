import React from "react";
import { video_container, abs_div } from "../videos.module.scss";
import BgVideo3 from "./BgVideo3";

const FirstVideo = () => {
  return (
    <BgVideo3>
      <div className={video_container}>
        <div className={abs_div}>
          <h1>ANTICÍPATE A POSIBLES PROBLEMAS DE SALUD.</h1>
        </div>
      </div>
    </BgVideo3>
  );
};

export default FirstVideo;
