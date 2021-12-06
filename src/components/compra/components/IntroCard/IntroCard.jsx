import React, { useState } from "react";
import IntroInfo from "../../../LandingComponents/Collar/components/introInfo/IntroInfo";
import ImgIntroCard from "./ImgIntroCard";
import Button from "../Button";
import {
  container,
  img,
  flex,
  info_container,
  text,
  abs,
  btn_container,
  only_kolyer_btn,
} from "./introCard.module.scss";
import { Link } from "react-scroll";
import SubscriptionModal from "./components/SubscriptionModal";
import MediaQuery from "react-responsive";
import SubscriptionPlan from "../Modals/SubscriptionPlan";

const IntroCard = () => {
  const [openSubscription, setOpenSubscription] = useState(false);
  const openSubscriptionModal = () => {
    setOpenSubscription(!openSubscription);
  };

  return (
    <div className={container}>
      {openSubscription && (
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
          <SubscriptionPlan openModal={openSubscriptionModal} />
        </div>
      )}
      <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000" className={img}>
        <ImgIntroCard />
      </div>
      <div className={abs}>
        <button data-sal="fade" data-sal-delay="100" data-sal-duration="1000" className={only_kolyer_btn} onClick={openSubscriptionModal}>
          <b>Sólo Early kolyers</b>
        </button>
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          className={info_container}
        >
          <h4>Collar kolyy + plan de suscripción</h4>
          <SubscriptionModal />
          <section className={flex}>
            <div>
              <h3>
                €147 <span>€210</span>
              </h3>
              <p>IVA incl.</p>
            </div>
            <div>
              <h3>
                €3,99 <span>€7,99</span>
              </h3>
              <p>/mes*</p>
            </div>
          </section>
          <div className={text}>
            <p>IMPORTANTE: </p>
            <p>
              *El pago de la suscripción se realizará a través de la app kolyy
              en el momento de recibir y activar el collar.
            </p>
          </div>
        </div>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
          <IntroInfo />
        </div>

        <div className={btn_container}>
          <MediaQuery maxWidth={870}>
            <Link
              activeClass="active"
              to="buy-collar"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <Button />
            </Link>
          </MediaQuery>
          <MediaQuery minWidth={870}>
            <Link
              activeClass="active"
              to="buy-collar"
              spy={true}
              smooth={true}
              offset={-200}
              duration={1000}
            >
              <Button />
            </Link>
          </MediaQuery>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
