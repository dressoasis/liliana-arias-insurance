/**
 * branding.js — Identidad visual de la marca.
 * Desacopla los valores visuales del código de componentes.
 */
export const brandingConfig = {
  // Textos del Logotipo
  logo: {
    text: "Liliana Arias",
    highlight: "Insurance", // Parte del logo que puede tener color diferente
    tagline: "Tu Asesora de Confianza",
  },
  // Paleta de marca (referencia a los CSS tokens, no valores directos)
  colors: {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    accent: "var(--color-accent)",
  },
  // Assets de marca
  assets: {
    favicon: "/favicon.ico",
    ogImage: "/og-image.jpg", // Imagen por defecto para Open Graph
    logoLight: "/logo-light.svg",
    logoDark: "/logo-dark.svg",
    logoSquare: "/logo-square.png",
  },
  // Tipografía de marca
  typography: {
    heading: "Inter",
    body: "Inter",
  },
};
