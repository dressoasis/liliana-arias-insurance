import { buildSchema } from "./Schema";

export const generateOrganizationSchema = ({
  name,
  url,
  logo,
  socialLinks = [],
  contactPoint = []
}) => {
  return buildSchema("Organization", {
    name,
    url,
    logo,
    sameAs: socialLinks, // URLs a redes sociales
    contactPoint: contactPoint.map(cp => ({
      "@type": "ContactPoint",
      telephone: cp.telephone,
      contactType: cp.contactType, // ej: "customer service"
      areaServed: cp.areaServed, // ej: "US"
      availableLanguage: cp.availableLanguage // ej: ["English", "Spanish"]
    }))
  });
};
