export const navigationContent = {
  mainNav: [
    { id: "home", label: "Inicio", href: "/" },
    {
      id: "services",
      label: "Servicios",
      href: "/services",
      submenu: [
        { id: "medicare",         label: "Medicare",              href: "/services/medicare" },
        { id: "marketplace",      label: "Marketplace ACA",       href: "/services/marketplace" },
        { id: "life",             label: "Seguro de Vida",        href: "/services/life-insurance" },
        { id: "dental",           label: "Odontología y Visión",  href: "/services/dental-vision" },
        { id: "final-expense",    label: "Gastos Finales",        href: "/services/final-expense" },
        { id: "critical-illness", label: "Enfermedad Crítica",    href: "/services/critical-illness" },
      ],
    },
    { id: "about",   label: "Nosotros", href: "/about" },
    { id: "contact", label: "Contacto", href: "/contact" },
  ],
  cta: {
    label: "Solicitar asesoría",
    href: "/quote",
  },
};
