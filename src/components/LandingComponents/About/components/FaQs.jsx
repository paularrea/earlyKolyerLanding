import React, { useState } from "react";
import {
  faqs_container,
  question,
  see_more,
  answer,
} from "../about.module.scss";

const FaQs = () => {
  const [open, setOpen] = useState(false);
  const [answerNumber, setAnswerNumber] = useState(false);

  const faqsCollection = [
    {
      index: 1,
      question: "¿Por qué existe una política de suscripción?",
      answer:
        "El collar Kolyy utiliza tecnología GPS para localizar a tu perro y utiliza las redes móviles para enviar la ubicación en tu smartphone. Al igual que los dispositivos móviles, también usa una tarjeta SIM que requiere de datos para conectarse a la red. Estos datos tienen un costo que parte lo asume Kolyy y la otra parte Kolyy cobra mediante suscripción fija mensual o anual al cliente. De esta forma tu perro estará localizable las 24h y a salvo en caso de fuga o perdida.",
    },
    {
      index: 2,
      question: "¿Cómo funciona una pre-venta?",
      answer:
        "Kolyy pone a la venta unidades limitadas de su primer collar inteligente a precios exclusivos para sus primeros clientes (EARLY KOLYERS) garantizando la entrega en el mes de marzo. Conocer las necesidades de los clientes (Talla collar y color) nos permite ser mas eficientes en la producción y, al tener unidades limitadas en este primer lote, podremos garantizar un servicio y una atención al cliente personalizada que a la vez nos ayude a ir desarrollando nuevas funcionalidades del collar.",
    },
    {
      index: 3,
      question: "¿Cuándo se empieza a cobrar la suscripción?",
      answer:
        "El pago de la suscripción se realizará en el momento que recibas tu collar y se vincule con la App de Kolyy. En el momento de instalar la App en tu móvil y, activar el collar, podrás escoger el plan de suscripción mensual o anual. Una vez escogido el plan i activado el collar ya estará listo para disfrutarlo con tu perro y empezar con el pago de la suscripción.",
    },
    {
      index: 4,
      question: "¿El collar es resistente al agua?",
      answer:
        "¡Sí! El collar kolyy cumple con el grado de protección IP67 lo que permite que sea resistente al agua y sumergible a 1 metros de profundidad durante 30 minutos sin que afecte a su funcionamiento. También esta 100% protegido de elementos solidos como polvo y arena.",
    },
    {
      index: 5,
      question: "¿El collar es apto para todos los tamaños de perro?",
      answer:
        "En kolyy no recomendamos el uso del collar para perros con un peso inferior a los 5Kg y un diámetro de cuello inferior a los 28 cm. Por otro lado, no existe limitaciones para perros grandes o muy grandes.",
    },
    {
      index: 6,
      question: "¿Qué puedo hacer si mi collar no funciona?",
      answer:
        "Al vender unidades limitadas garantizamos una rápida respuesta a posibles problemas técnicos. Envía un correo a support@kolyy.com y, sino conseguimos dar con una solución telemática reemplazamos el collar rápidamente por uno nuevo. El collar Kolyy tiene una garantía de 2 años.",
    },
    {
      index: 7,
      question: "¿Cuándo recibiré mi collar?",
      answer:
        "Actualmente tenemos una fecha prevista de envío para el mes de marzo. Mantendremos informados en todo momento de las actualizaciones y fechas exactas de envió a todos nuestros clientes. En kolyy nos comprometemos a trabajar muy duro para que vuestros perros puedan disfrutar del collar lo antes posible.",
    },
    {
      index: 8,
      question: "¿El GPS funciona por satélite o a través de cobertura móvil?",
      answer:
        "Por motivos de tamaño y optimización del dispositivo, el collar funciona a través de cobertura 2G, disponible en más del 95% del territorio nacional.",
    },
    {
      index: 9,
      question: "¿Puedo devolverlo si no me gusta?",
      answer:
        "Dispones de 14 días para poder devolver el collar en caso de que no quedes satisfecho. No obstante, deberás hacerlo en perfectas condiciones.",
    },
    {
      index: 10,
      question: "¿Mide constantes vitales como el pulso?",
      answer:
        "Por ahora la tecnología y los métodos existentes no permiten hacerlo de un modo fiable a través de un collar, pero estamos trabajando junto con los mejores especialistas y veterinarios para poder hacerlo en el futuro.",
    },
    {
      index: 11,
      question: "¿Que pasa si ya utilizo un arnés de paseo?",
      answer:
        "El collar Kolyy está pensado para monitorizar su actividad y localización tanto dentro como fuera de casa, por lo que puedes seguir usando su arnés de paseo de forma normal junto con el collar Kolyy cuando salgáis a pasear.",
    },
    {
      index: 12,
      question: "¿El GPS funciona si el collar se queda sin batería?",
      answer:
        "Como en todo dispositivo electrónico, si el collar se queda sin batería no puede seguir funcionando. El collar incorpora un modo en el que cuando queda poca batería, “apaga” todas las funciones para priorizar el uso del “GPS”.",
    },
    {
      index: 13,
      question:
        "¿Las funciones de localización del collar están disponibles si salgo de España?",
      answer:
        "El collar kolyy funciona en todos los países miembros de la Unión Europea, siempre sujeto a la cobertura y el operador de cada territorio. Listado de países UE 27: Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumania y Suecia.",
    },
  ];

  const openFaq = (index) => {
    setAnswerNumber(index);
    setOpen(!open);
  };

  return (
    <div className={faqs_container}>
      <h2>FAQs</h2>
      <div>
        {faqsCollection.map((faq) => {
          return (
            <div
              style={{ cursor: "pointer" }}
              index={faq.index}
              value={faq.index}
              onClick={() => openFaq(faq.index)}
            >
              <div className={question}>
                <p>{faq.question}</p>
                <p className={see_more}>+</p>
              </div>
              <p
                className={answer}
                style={{
                  display:
                    answerNumber === faq.index && open ? "block" : "none",
                  color: "gray",
                  fontSize: "14px",
                  lineHeight: "17px",
                }}
              >
                {faq.answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaQs;
