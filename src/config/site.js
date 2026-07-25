/**
 * site.js — Configuración global del sitio.
 * Cambia estos valores para adaptar el proyecto a otro cliente.
 */
export const siteConfig = {
  name: "Liliana Arias Insurance",
  shortName: "LAI",
  tagline: "Tu protección, nuestra prioridad",
  description: "Asesoría personalizada en seguros de salud, vida y Medicare para familias en Estados Unidos.",
  url: import.meta.env.VITE_SITE_URL || "https://lilianaariasinsurance.com",
  locale: "es-US",
  language: "es",
  region: "US",
  timezone: "America/New_York",
  // Rutas clave del sitio
  routes: {
    home: "/",
    about: "/about",
    contact: "/contact",
    quote: "/quote",
    blog: "/blog",
    services: "/services",
    privacy: "/privacy",
    terms: "/terms",
  },
};
