import lifeInsuranceImg from "../../assets/images/life-insurance.jpg";

export const lifeInsuranceContent = {
  // ── Hero Block ────────────────────────────────────────────────────────────
  badge: {
    label: "Seguro de Vida",
    icon: "shield",
  },
  title: "Protege el futuro financiero de las personas que más amas.",
  description: [
    "Un seguro de vida puede brindar tranquilidad al saber que tu familia contará con apoyo económico ante situaciones inesperadas.",
    "Liliana Arias te ayuda a comparar diferentes opciones de cobertura para encontrar un plan que se adapte a tus necesidades, objetivos y presupuesto, ofreciéndote una asesoría clara y personalizada durante todo el proceso.",
    "Nuestro compromiso es ayudarte a tomar una decisión pensando en el bienestar de quienes más quieres."
  ],

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: [
    {
      id: "financial",
      icon: "coins",
      label: "Protección financiera para tu familia",
    },
    {
      id: "options",
      icon: "layers",
      label: "Diferentes opciones de cobertura",
    },
    {
      id: "needs",
      icon: "umbrella",
      label: "Planes adaptados a tus necesidades",
    },
    {
      id: "support",
      icon: "headphones",
      label: "Asesoría personalizada durante todo el proceso",
    },
  ],

  // ── Highlighted note ─────────────────────────────────────────────────────
  highlight: {
    icon: "heart",
    text: "Protege a quienes más quieres con una cobertura diseñada para brindar tranquilidad y respaldo financiero.",
  },

  // ── Buttons ──────────────────────────────────────────────────────────────
  buttons: {
    primary: {
      label: "Conocer opciones",
      href: "/quote",
    },
    secondary: {
      label: "Hablar por WhatsApp",
      phone: "13059886196",
      message:
        "Hola Liliana, me gustaría recibir asesoría sobre opciones de Seguro de Vida para proteger a mi familia.",
    },
  },

  // ── Image ─────────────────────────────────────────────────────────────────
  image: {
    src: lifeInsuranceImg,
    alt: "Familia feliz caminando por un jardín, simbolizando la tranquilidad y protección que brinda un seguro de vida.",
  },
};
