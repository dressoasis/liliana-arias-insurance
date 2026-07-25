import dentalVisionImg from "../../assets/images/dental-vision.jpg";

export const dentalVisionContent = {
  // ── Hero Block ────────────────────────────────────────────────────────────
  badge: {
    label: "Odontología y Visión",
    icon: "smile",
  },
  title: "Cuida tu salud visual y dental con la cobertura adecuada.",
  description: [
    "La salud dental y visual forma parte del bienestar de toda la familia.",
    "Liliana Arias te ayuda a conocer las diferentes opciones de cobertura disponibles para servicios de odontología y visión, permitiéndote comparar alternativas y encontrar un plan que se adapte a tus necesidades y presupuesto.",
    "Recibe asesoría personalizada para elegir la opción que mejor se ajuste a tu estilo de vida."
  ],

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: [
    {
      id: "dental",
      icon: "smile",
      label: "Cobertura para consultas odontológicas",
    },
    {
      id: "vision-exams",
      icon: "eye",
      label: "Exámenes de la vista",
    },
    {
      id: "glasses",
      icon: "glasses",
      label: "Ayuda para lentes y servicios visuales",
    },
    {
      id: "family",
      icon: "users",
      label: "Planes para individuos y familias",
    },
  ],

  // ── Highlighted note ─────────────────────────────────────────────────────
  highlight: {
    icon: "shield-check",
    text: "Encuentra una cobertura que te ayude a cuidar tu sonrisa y tu salud visual con la orientación de un asesor profesional.",
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
        "Hola Liliana, me gustaría recibir asesoría sobre planes de Odontología y Visión.",
    },
  },

  // ── Image ─────────────────────────────────────────────────────────────────
  image: {
    src: dentalVisionImg,
    alt: "Doctor revisando la visión de una paciente y dentista atendiendo a una persona, representando cuidado visual y dental.",
  },
};
