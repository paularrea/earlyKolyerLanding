import React from "react";
import GooglePlayImg from "./GooglePlayImg";
import { container, flex_container, img } from "./connect.module.scss";
import AppleImg from "./AppleImg";

const GoogleAppleConnect = () => {
  return (
    <div className={container}>
      <p>Conecta el collar a nuestra app.</p>
      <div className={flex_container}>
      <div className={img}>
          <AppleImg/>
        </div>
        <div className={img}>
          <GooglePlayImg />
        </div>
      </div>
    </div>
  );
};

export default GoogleAppleConnect;
