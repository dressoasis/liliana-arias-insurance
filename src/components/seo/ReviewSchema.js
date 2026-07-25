import { buildSchema } from "./Schema";

/**
 * Review Schema (Individual) y AggregateRating
 * Activa las "estrellas doradas" en resultados de búsqueda de Google.
 */
export const generateReviewSchema = ({
  itemName,
  itemType = "InsuranceAgency",
  itemUrl,
  reviewBody,
  ratingValue,
  author = {},
  datePublished,
  publisher = {},
}) => {
  return buildSchema("Review", {
    itemReviewed: {
      "@type": itemType,
      name: itemName,
      url: itemUrl,
    },
    reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(ratingValue),
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": author.type || "Person",
      name: author.name,
    },
    datePublished,
    publisher: publisher.name ? {
      "@type": "Organization",
      name: publisher.name,
    } : undefined,
  });
};

/**
 * AggregateRating
 * Añade la puntuación compuesta a cualquier entidad.
 * Se usa como propiedad embebida dentro de InsuranceAgency u Organization.
 */
export const buildAggregateRating = ({ ratingValue, reviewCount, best = "5", worst = "1" }) => ({
  "@type": "AggregateRating",
  ratingValue: String(ratingValue),
  reviewCount: String(reviewCount),
  bestRating: best,
  worstRating: worst,
});
