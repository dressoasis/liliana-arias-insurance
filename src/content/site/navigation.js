export const navigationContent = {
  mainNav: [
    { id: "home", label: "Inicio", href: "/" },
    {
      id: "services",
      label: "Servicios",
      href: "/services",
      submenu: [
        { id: "medicare",         label: "Medicare",              href: "/medicare" },
        { id: "marketplace",      label: "Marketplace ACA",       href: "/marketplace" },
        { id: "life",             label: "Seguro de Vida",        href: "/seguro-de-vida" },
        { id: "dental",           label: "Odontología y Visión",  href: "/odontologia-y-vision" },
        { id: "final-expense",    label: "Gastos Finales",        href: "/gastos-finales" },
        { id: "critical-illness", label: "Enfermedad Crítica",    href: "/enfermedad-critica" },
      ],
    },
    { id: "about",   label: "Nosotros", href: "/about" },
    { id: "contact", label: "Contacto", href: "/contact" },
  ],
  cta: {
    label: "Hablar por WhatsApp",
    href: "https://wa.me/12109293721",
    external: true,
  },
};
