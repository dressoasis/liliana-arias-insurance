import lilianaPhoto from "../../assets/images/liliana-arias.jpg";

export const aboutContent = {
  // ─── Hero ────────────────────────────────────────────────────────────────────
  hero: {
    badge: "AGENTE DE SEGUROS AUTORIZADO",
    title: "Una asesoría clara para decisiones importantes.",
    description:
      "Cuando se trata de elegir una cobertura, entender tus opciones es tan importante como encontrar un plan. Liliana Arias ofrece asesoría personalizada para ayudarte a comprender las alternativas disponibles y tomar una decisión con mayor confianza.",
    buttons: [
      { label: "Solicitar asesoría", href: "/quote", variant: "primary" },
      { label: "Contactar", href: "/contact", variant: "outline" },
    ],
    image: {
      src: lilianaPhoto,
      alt: "Liliana Arias, agente de seguros autorizado, disponible para orientarte en tus opciones de cobertura",
    },
  },

  // ─── Presentación ────────────────────────────────────────────────────────────
  presentation: {
    title: "Conoce a Liliana Arias",
    paragraphs: [
      "Liliana Arias es una agente de seguros autorizada que brinda asesoría para diferentes necesidades de cobertura.",
      "Su enfoque es ayudar a las personas a entender sus opciones y encontrar una alternativa que se adapte a sus necesidades.",
      "Si estás explorando Medicare, Marketplace, Seguro de Vida u otras opciones de cobertura, puedes recibir orientación antes de tomar una decisión.",
    ],
    image: {
      src: lilianaPhoto,
      alt: "Liliana Arias, agente de seguros autorizado",
    },
  },

  // ─── Propuesta de valor ──────────────────────────────────────────────────────
  values: [
    {
      id: "v1",
      icon: "shield-check",
      title: "Confianza",
      description:
        "Recibe orientación clara antes de tomar una decisión sobre tu cobertura.",
    },
    {
      id: "v2",
      icon: "message-circle",
      title: "Asesoría personalizada",
      description:
        "Cada persona tiene necesidades diferentes. La asesoría se enfoca en comprender tu situación y tus opciones.",
    },
    {
      id: "v3",
      icon: "badge-check",
      title: "Asesoría sin costo",
      description:
        "La asesoría es gratuita y no existe obligación de inscribirse.",
    },
  ],

  // ─── Áreas de servicio ───────────────────────────────────────────────────────
  serviceAreas: {
    title: "¿En qué puedo ayudarte?",
    intro: "El primer paso es entender qué tipo de cobertura estás buscando.",
    items: [
      { id: "sa1", label: "Medicare", icon: "heart-pulse", href: "/medicare" },
      {
        id: "sa2",
        label: "Marketplace / Obamacare",
        icon: "shopping-bag",
        href: "/marketplace",
      },
      {
        id: "sa3",
        label: "Seguro de Vida",
        icon: "shield",
        href: "/seguro-de-vida",
      },
      {
        id: "sa4",
        label: "Dental & Vision",
        icon: "smile",
        href: "/odontologia-y-vision",
      },
    ],
    allServicesLink: "/servicios",
  },

  // ─── Proceso ─────────────────────────────────────────────────────────────────
  process: [
    {
      id: "p1",
      step: "01",
      title: "Conversemos",
      description:
        "Cuéntame qué tipo de cobertura estás buscando y cuáles son tus necesidades.",
    },
    {
      id: "p2",
      step: "02",
      title: "Conoce tus opciones",
      description:
        "Revisaremos las alternativas disponibles para ayudarte a comprender sus diferencias.",
    },
    {
      id: "p3",
      step: "03",
      title: "Toma tu decisión",
      description:
        "El objetivo es que puedas tomar una decisión informada y con mayor confianza.",
    },
  ],

  // ─── CTA ─────────────────────────────────────────────────────────────────────
  cta: {
    title: "¿Tienes preguntas sobre tu cobertura?",
    description:
      "Habla con Liliana y recibe asesoría para entender tus opciones.",
    phone: "(210) 929-3721",
    phoneRaw: "+12109293721",
    email: "Lilianaariasinsurance@gmail.com",
    buttons: [
      { label: "Solicitar asesoría", href: "/quote", variant: "primary" },
      {
        label: "Hablar por WhatsApp",
        href: "https://wa.me/12109293721",
        variant: "outline",
        external: true,
      },
    ],
  },
};
