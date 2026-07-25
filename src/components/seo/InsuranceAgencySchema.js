import { buildSchema } from "./Schema";

/**
 * InsuranceAgency Schema
 * Extiende LocalBusiness específicamente para agencias de seguros.
 * Google utiliza este tipo para mostrar tarjetas ricas en búsquedas locales
 * como "agencia de seguros cerca de mí".
 */
export const generateInsuranceAgencySchema = ({
  name,
  url,
  logo,
  image,
  description,
  telephone,
  email,
  address = {},
  geo = {},
  openingHoursSpecification = [],
  priceRange = "$$",
  areaServed = [],
  serviceTypes = [],
  languages = [],
  socialLinks = [],
  rating = null,
}) => {
  const schema = buildSchema("InsuranceAgency", {
    name,
    url,
    logo,
    image,
    description,
    telephone,
    email,
    priceRange,

    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: address.country || "US",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },

    // Áreas de servicio: soporta múltiples ciudades y estados
    areaServed: areaServed.map((area) => ({
      "@type": area.type || "State", // "State", "City", "AdministrativeArea"
      name: area.name,
    })),

    // Tipos de servicios específicos de seguros
    hasOfferCatalog: serviceTypes.length > 0 ? {
      "@type": "OfferCatalog",
      name: "Servicios de Seguros",
      itemListElement: serviceTypes.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        name: service.name,
        description: service.description,
      })),
    } : undefined,

    // Idiomas disponibles: Español + Inglés
    availableLanguage: languages.map((lang) => ({
      "@type": "Language",
      name: lang,
    })),

    sameAs: socialLinks,

    openingHoursSpecification: openingHoursSpecification.map((oh) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: oh.dayOfWeek,
      opens: oh.opens,
      closes: oh.closes,
    })),

    // Rating agregado opcional
    ...(rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: rating.value,
        reviewCount: rating.count,
        bestRating: rating.best || "5",
        worstRating: rating.worst || "1",
      },
    }),
  });

  return schema;
};
