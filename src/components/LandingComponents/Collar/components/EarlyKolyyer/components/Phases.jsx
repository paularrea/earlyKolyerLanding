import React from "react";
import MediaQuery from "react-responsive";
import {
  phases_container,
  phases_info,
  img,
  desk_container,
} from "../earlyKolyyerBanner.module.scss";
import EarlyImg from "./EarlyImg";
import EarlyImgDesk from "./EarlyImgDesk";
import Title from "./Title";
import Text from "./Text";

const Phases = () => {
  return (
    <div className={phases_container}>
      <div className={desk_container}>
        <MediaQuery minWidth={870}>
          <Title />
          <div className={img}>
            <EarlyImgDesk />
          </div>
          <Text />
        </MediaQuery>
        <MediaQuery maxWidth={870}>
          <div className={img}>
            <EarlyImg />
          </div>
        </MediaQuery>
      </div>
    </div>
  );
};

export default Phases;
