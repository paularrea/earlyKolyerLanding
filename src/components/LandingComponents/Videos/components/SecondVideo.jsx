import React from "react";
import { video_container,abs_div } from "../videos.module.scss";
import BgVideo2 from "./BgVideo2";

const FirstVideo = () => {
  return (
    <BgVideo2>
      <div className={video_container}>
        <div className={abs_div}>
          <h1>
            VIVE TRANQUILO. <br />
            LOCALÍZALO EN CUALQUIER MOMENTO.
          </h1>
        </div>
      </div>
    </BgVideo2>
  );
};

export default FirstVideo;
