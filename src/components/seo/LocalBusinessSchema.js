import { buildSchema } from "./Schema";

export const generateLocalBusinessSchema = ({
  name,
  image,
  url,
  telephone,
  address = {},
  geo = {},
  openingHoursSpecification = [],
  priceRange = "$$"
}) => {
  return buildSchema("LocalBusiness", {
    name,
    image,
    url,
    telephone,
    priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude
    },
    openingHoursSpecification: openingHoursSpecification.map(oh => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: oh.dayOfWeek,
      opens: oh.opens,
      closes: oh.closes
    }))
  });
};
