import medicareImg from "../../assets/images/medicare-asesoramiento.jpg";

export const medicareContent = {
  // ── Hero Block ────────────────────────────────────────────────────────────
  badge: {
    label: "Medicare",
    icon: "heart-pulse",
  },
  title: "Encuentra el plan de Medicare adecuado con asesoría personalizada.",
  description: [
    "Cumplir los requisitos para Medicare es solo el primer paso. Elegir el plan correcto puede marcar una gran diferencia en tu cobertura y en los costos que asumirás en el futuro.",
    "Liliana Arias te ayuda a comprender las diferencias entre Medicare Original, Medicare Advantage, Medicare Supplement y los planes de medicamentos recetados (Parte D), comparando las opciones disponibles para ayudarte a tomar una decisión con confianza.",
  ],

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: [
    {
      id: "original",
      icon: "shield-check",
      label: "Medicare Original (Partes A y B)",
    },
    {
      id: "advantage",
      icon: "heart-pulse",
      label: "Medicare Advantage (Parte C)",
    },
    {
      id: "supplement",
      icon: "file-text",
      label: "Planes Medicare Supplement",
    },
    {
      id: "partd",
      icon: "pill",
      label: "Cobertura de medicamentos (Parte D)",
    },
  ],

  // ── Highlighted note ─────────────────────────────────────────────────────
  highlight: {
    icon: "sparkles",
    text: "Asesoría personalizada durante todo el proceso de comparación y elección de tu plan Medicare.",
  },

  // ── Buttons ──────────────────────────────────────────────────────────────
  buttons: {
    primary: {
      label: "Solicitar asesoría",
      href: "/quote",
    },
    secondary: {
      label: "Hablar por WhatsApp",
      phone: "12109293721",
      message:
        "Hola Liliana, me gustaría recibir asesoría sobre Medicare y mis opciones de cobertura.",
    },
  },

  // ── Image ─────────────────────────────────────────────────────────────────
  image: {
    src: medicareImg,
    alt: "Liliana Arias asesora a una pareja mayor sobre sus opciones de Medicare en una reunión cálida y profesional.",
  },
};
