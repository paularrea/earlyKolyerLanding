import React from "react";
import "./scrollSections.scss";
import blueCollar from "../../../images/collar-perro-gps.png";
import blackCollar from "../../../images/collar-perro-kolyy.png";
import yellowCollar from "../../../images/collar-perro-salud.png";

import BgIntro1 from "./img/bgIntro1";
import BgIntro2 from "./img/bgIntro2";
import BgIntro3 from "./img/bgIntro3";
import BannerCollar from "../bannerCollar";
import PlacaIntro from "../placaIntro";
import Footer from "../../footer/footer";
import { Link } from "gatsby";

const SectionScroll = () => {
  return (
    <div className="container-scroll">
      <div className="section-scroll">
        <div className="fixed">
          <div className="flex-container">
            <img
              data-sal="fade"
              data-sal-delay="100"
              data-sal-duration="1000"
              src={blueCollar}
              alt="collar perro azul"
            />
            <div
              data-sal="fade"
              data-sal-delay="100"
              data-sal-duration="1000"
              className="text-div"
            >
              {" "}
              <h1>No lo pierdas.</h1>
              <p>
                Localizador GPS para saber donde está en todo <br /> momento  y
                alerta por si tu perro sale de la zona que has marcado como
                segura.
              </p>
              <div className="buttons">
                <button style={{ backgroundColor: "#D9DADD", color: "black" }}>
                  <Link to="/collar-perro-gps">Saber más</Link>
                </button>{" "}
                <button>
                  <Link style={{ color: "white" }} to="/reserva-collar-kolyy">
                    Reserva
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-scroll">
        <div className="fixed">
          <div className="flex-container">
            <img src={blackCollar} alt="collar perro negro" />
            <div className="text-div">
              <h1>Motívale a llevar <br /> una vida mejor.</h1>
              <p>
                Registro de actividad para que tu perro <br />
                alcance sus objetivos de ejercicio.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-scroll">
        <div className="p fixed">
          <div className="flex-container">
            <img src={yellowCollar} alt="collar perro amarillo" />
            <div className="text-div">
              <h1>Anticípate a los problemas.</h1>
              <p>
                Registro de sus hábitos cotidianos para <br />
                anticiparte a futuros problemas de salud.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-scroll">
        <div>
          <BannerCollar />
        </div>
      </div>
      <div className="section-scroll">
        <div className="p fixed" style={{ width: "100vw" }}>
          <BgIntro1>
            <div className="flex-container-bg">
              <div className="text-div">
                <h1>Una conexión única, nuevos límites.</h1>
                <p>
                  Potencia el estilo de vida de tu perro y atrévete a
                  experimentar nuevos límites.
                </p>
                <Link to="/collar-perro-gps">
                  <button
                    style={{ backgroundColor: "#D9DADD", color: "black" }}
                  >
                    Saber más
                  </button>
                </Link>
              </div>
            </div>
          </BgIntro1>
        </div>
      </div>
      <div className="section-scroll">
        <div className="p fixed" style={{ width: "100vw" }}>
          <BgIntro2>
            <div className="flex-container-bg">
              <div className="text-div">
                <h1>Un collar para una vida activa y saludable</h1>
                <p>
                  Conviértete en su entrenador personal y mide su actividad.
                </p>
                <Link to="/collar-perro-gps">
                  <button
                    style={{ backgroundColor: "#D9DADD", color: "black" }}
                  >
                    Saber más
                  </button>
                </Link>
              </div>
            </div>
          </BgIntro2>
        </div>
      </div>
      <div className="section-scroll">
        <div className="p fixed" style={{ width: "100vw" }}>
          <BgIntro3>
            <div className="flex-container-bg">
              <div className="text-div">
                <h1>Desde cualquier lugar siempre conectado a ti.</h1>
                <p>Que la distancia no te aleje de estar cerca de tu perro.</p>
                <Link to="/collar-perro-gps">
                  <button
                    style={{ backgroundColor: "#D9DADD", color: "black" }}
                  >
                    Saber más
                  </button>
                </Link>
              </div>
            </div>
          </BgIntro3>
        </div>
      </div>
      <div className="section-scroll-last">
        <PlacaIntro />
        <Footer />
      </div>
    </div>
  );
};

export default SectionScroll;
