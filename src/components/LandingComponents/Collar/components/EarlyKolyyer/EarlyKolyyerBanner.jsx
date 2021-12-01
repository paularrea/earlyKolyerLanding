import React from "react";
import MediaQuery from "react-responsive";
import Phases from "./components/Phases";
import SellingBar from "./components/SellingBar";
import Title from "./components/Title";
import Text from "./components/Text";
import { bg_container, container, flex_container } from "./earlyKolyyerBanner.module.scss";

const EarlyKolyyerBanner = () => {
  return (
    <div className={bg_container}>
      <div className={container}>
        <MediaQuery maxWidth={870}>
          <div className={flex_container}>
            <Title />
            <Text />
          </div>
        </MediaQuery>
        <Phases />
        <SellingBar />
      </div>
    </div>
  );
};

export default EarlyKolyyerBanner;
