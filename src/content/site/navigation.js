export const navigationContent = {
  mainNav: [
    { id: "home", label: "Inicio", href: "/" },
    { 
      id: "services", 
      label: "Servicios", 
      href: "/services",
      submenu: [
        { id: "life", label: "Seguro de Vida", href: "/services/life" },
        { id: "health", label: "Seguro de Salud", href: "/services/health" },
        { id: "medicare", label: "Medicare", href: "/services/medicare" }
      ]
    },
    { id: "about", label: "Nosotros", href: "/about" },
    { id: "contact", label: "Contacto", href: "/contact" },
  ],
  cta: {
    label: "Solicitar asesoría",
    href: "/quote",
  }
};
