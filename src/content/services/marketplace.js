import marketplaceImg from "../../assets/images/marketplace-asesoramiento.jpg";

export const marketplaceContent = {
  // ── Hero Block ────────────────────────────────────────────────────────────
  badge: {
    label: "Marketplace ACA",
    icon: "shopping-bag",
  },
  title: "Encuentra un seguro médico que se adapte a tu familia y a tu presupuesto.",
  description: [
    "Si necesitas un seguro médico para ti o tu familia, el Marketplace ACA ofrece diferentes opciones de cobertura según tus necesidades.",
    "Liliana Arias te acompaña durante todo el proceso para comparar planes, revisar si calificas para subsidios de acuerdo con tus ingresos y ayudarte a completar correctamente tu inscripción durante el período correspondiente.",
    "Nuestro objetivo es ayudarte a tomar una decisión informada con la tranquilidad de contar con asesoría personalizada."
  ],

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: [
    {
      id: "comparison",
      icon: "scale",
      label: "Comparación de diferentes planes de salud",
    },
    {
      id: "subsidies",
      icon: "calculator",
      label: "Revisión de elegibilidad para subsidios",
    },
    {
      id: "enrollment",
      icon: "clipboard-check",
      label: "Inscripción guiada paso a paso",
    },
    {
      id: "family",
      icon: "users",
      label: "Cobertura para individuos y familias",
    },
  ],

  // ── Highlighted note ─────────────────────────────────────────────────────
  highlight: {
    icon: "heart-handshake",
    text: "Te ayudamos a encontrar un plan que se adapte a tus necesidades de cobertura y a tu presupuesto.",
  },

  // ── Buttons ──────────────────────────────────────────────────────────────
  buttons: {
    primary: {
      label: "Explorar opciones",
      href: "/quote",
    },
    secondary: {
      label: "Hablar por WhatsApp",
      phone: "13059886196",
      message:
        "Hola Liliana, me gustaría recibir asesoría sobre el Marketplace ACA y mis opciones de seguro médico.",
    },
  },

  // ── Image ─────────────────────────────────────────────────────────────────
  image: {
    src: marketplaceImg,
    alt: "Liliana Arias asesora a una familia sobre sus opciones de seguro de salud del Marketplace.",
  },
};
