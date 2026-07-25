import lilianaPhoto from "../../assets/images/liliana-arias.jpg";

export const heroContent = {
  badge: "Asesoría personalizada · Totalmente gratuita",
  title: "Asegurando el bienestar de tu familia y tu futuro",
  description: "Obtén la cobertura médica y de vida que realmente necesitas, con asesoría honesta, clara y siempre a tu lado.",
  buttons: [
    { label: "Solicitar asesoría gratuita", href: "/contact", variant: "primary" },
    { label: "Llamar ahora", href: "tel:+15551234567", variant: "outline" }
  ],
  trustIndicators: [
    { id: "ti1", title: "Asesoría Gratuita", icon: "check-circle-2" },
    { id: "ti2", title: "Atención Bilingüe", icon: "users" },
    { id: "ti3", title: "Licencia en Múltiples Estados", icon: "shield-check" }
  ],
  floatingCards: [
    {
      id: "fc1",
      title: "Medicare",
      description: "Cobertura para mayores de 65 años",
      icon: "heart-pulse",
      accent: "blue"
    },
    {
      id: "fc2",
      title: "Marketplace ACA",
      description: "Planes con subsidios disponibles",
      icon: "shopping-bag",
      accent: "indigo"
    },
    {
      id: "fc3",
      title: "Life Insurance",
      description: "Protección para tu familia",
      icon: "shield",
      accent: "sky"
    },
    {
      id: "fc4",
      title: "Dental & Vision",
      description: "Cuidado para toda la familia",
      icon: "smile",
      accent: "teal"
    },
    {
      id: "fc5",
      title: "Final Expense",
      description: "Planificación financiera",
      icon: "landmark",
      accent: "violet"
    },
    {
      id: "fc6",
      title: "Critical Illness",
      description: "Protección adicional",
      icon: "activity",
      accent: "rose"
    }
  ],
  image: {
    src: lilianaPhoto,
    alt: "Liliana Arias, asesora de seguros licenciada, sonriente y lista para orientarte en la mejor cobertura para ti y tu familia"
  },
  insurers: {
    title: "Trabajamos con compañías líderes",
    logos: [
      { id: "ins1", name: "Ambetter" },
      { id: "ins2", name: "Florida Blue" },
      { id: "ins3", name: "Oscar" },
      { id: "ins4", name: "Aetna" },
      { id: "ins5", name: "Cigna" },
      { id: "ins6", name: "UnitedHealthcare" }
    ]
  }
};
