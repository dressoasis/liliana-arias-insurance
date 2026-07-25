import { siteConfig } from "./site";
import { brandingConfig } from "./branding";
import { companyConfig } from "./company";
import { contactConfig } from "./contact";
import { socialConfig } from "./social";

/**
 * seo.js — Configuración global de SEO.
 * Agrega el sufijo de marca al título de cada página automáticamente.
 */
export const seoConfig = {
  // Plantilla del título: "{Título de la Página} | {titleTemplate}"
  titleTemplate: `%s | ${siteConfig.name}`,
  defaultTitle: siteConfig.name,
  defaultDescription: siteConfig.description,
  canonical: siteConfig.url,
  robots: "index, follow",

  // Open Graph base
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${brandingConfig.assets.ogImage}`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  // Twitter Cards
  twitter: {
    handle: socialConfig.twitter.handle,
    cardType: "summary_large_image",
  },

  // Datos para el OrganizationSchema que se inyecta globalmente
  organization: {
    name: companyConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${brandingConfig.assets.logoSquare}`,
    socialLinks: socialConfig.sameAs,
    contactPoint: [
      {
        telephone: contactConfig.phone.primary,
        contactType: "customer service",
        areaServed: companyConfig.licenseStates,
        availableLanguage: ["English", "Spanish"],
      },
    ],
  },

  // Datos para LocalBusiness / InsuranceAgency
  localBusiness: {
    name: companyConfig.displayName,
    url: siteConfig.url,
    telephone: contactConfig.phone.primary,
    address: contactConfig.address,
    openingHoursSpecification: contactConfig.businessHours
      .filter((h) => h.opens !== null)
      .flatMap((h) =>
        h.days.map((day) => ({
          dayOfWeek: day,
          opens: h.opens,
          closes: h.closes,
        }))
      ),
    areaServed: companyConfig.licenseStates.map((state) => ({
      type: "State",
      name: state,
    })),
    languages: ["Español", "English"],
    socialLinks: socialConfig.sameAs,
  },
};
