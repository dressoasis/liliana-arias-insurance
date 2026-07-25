/**
 * index.js — Punto de entrada único para toda la configuración global.
 *
 * Uso en cualquier componente:
 *   import { siteConfig, contactConfig } from "@/config";
 *
 * Uso del objeto unificado:
 *   import config from "@/config";
 *   config.site.name
 *   config.contact.phone.primary
 */
export { siteConfig } from "./site";
export { brandingConfig } from "./branding";
export { companyConfig } from "./company";
export { contactConfig } from "./contact";
export { socialConfig } from "./social";
export { seoConfig } from "./seo";
export { analyticsConfig } from "./analytics";

// Objeto unificado como default export para acceso fluido
import { siteConfig } from "./site";
import { brandingConfig } from "./branding";
import { companyConfig } from "./company";
import { contactConfig } from "./contact";
import { socialConfig } from "./social";
import { seoConfig } from "./seo";
import { analyticsConfig } from "./analytics";

const config = {
  site: siteConfig,
  branding: brandingConfig,
  company: companyConfig,
  contact: contactConfig,
  social: socialConfig,
  seo: seoConfig,
  analytics: analyticsConfig,
};

export default config;
