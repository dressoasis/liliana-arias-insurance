export const journeyContent = {
  badge: "Tu Camino",
  title: "¿En qué etapa de la vida te encuentras?",
  description: "Selecciona tu situación actual. Te guiaremos paso a paso hacia las opciones de protección más adecuadas para ti.",
  situations: [
    { 
      id: "turning-65", 
      title: "Voy a cumplir 65 años", 
      description: "Conoce tus opciones, fechas clave y cómo inscribirte en Medicare a tiempo sin penalizaciones.",
      icon: "calendar-heart",
      actionText: "Ver guía de Medicare",
      href: "/journey/turning-65"
    },
    { 
      id: "need-health", 
      title: "Necesito seguro médico", 
      description: "Encuentra cobertura de salud individual o familiar, o revisa si calificas para subsidios.",
      icon: "activity",
      actionText: "Explorar planes de salud",
      href: "/journey/health-insurance"
    },
    { 
      id: "protect-family", 
      title: "Quiero proteger a mi familia", 
      description: "Asegura el futuro financiero de tus seres queridos ante cualquier eventualidad.",
      icon: "shield-half",
      actionText: "Ver opciones de vida",
      href: "/journey/life-insurance"
    },
    { 
      id: "have-medicare", 
      title: "Ya tengo Medicare", 
      description: "Revisa tu plan actual, añade coberturas dentales o explora opciones Advantage.",
      icon: "check-circle",
      actionText: "Revisar mi cobertura",
      href: "/journey/medicare-review"
    }
  ]
};
