import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import MediaQuery from "react-responsive";
import { container } from "../videos.module.scss";

const FirstVideo = () => {
  const [play, setPlay] = useState(false);
  return (
    <div className={container}>
      <InView
        threshold={1}
        as="div"
        onChange={(inView) => (inView ? setPlay(true) : setPlay(false))}
      >
        <MediaQuery maxWidth={870}>
        <iframe
          title="kolyy1"
          src="https://player.cloudinary.com/embed/?public_id=https%3A%2F%2Fres.cloudinary.com%2Fdop69qrah%2Fvideo%2Fupload%2Fv1638818033%2Fvideo_actividad_mobile_eef5ic.mp4&cloud_name=demo&player%5Bfluid%5D=true&player%5Bcontrols%5D=false&player%5Bmuted%5D=true&player%5Bautoplay_mode%5D=on-scroll&player%5Bautoplay%5D=true&player%5Bloop%5D=true&source%5Bsource_types%5D%5B0%5D=mp4"
          width="100%"
          height="100%"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowfullscreen
          frameborder="0"
        ></iframe>
        </MediaQuery>
        <MediaQuery minWidth={870}>
        <iframe
          title="kolyy1"
          src="https://player.cloudinary.com/embed/?public_id=https%3A%2F%2Fres.cloudinary.com%2Fdop69qrah%2Fvideo%2Fupload%2Fv1638811300%2Fvideo_actividad_2_tzgcvt.mp4&cloud_name=demo&player%5Bfluid%5D=true&player%5Bcontrols%5D=false&player%5Bmuted%5D=true&player%5Bautoplay_mode%5D=on-scroll&player%5Bautoplay%5D=true&player%5Bloop%5D=true&source%5Bsource_types%5D%5B0%5D=mp4"
          width="100%"
          height="100%"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowfullscreen
          frameborder="0"
        ></iframe>
        </MediaQuery>
      </InView>
    </div>
  );
};

export default FirstVideo;
