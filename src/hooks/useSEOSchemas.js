/**
 * useSEOSchemas — Hook reutilizable que compone múltiples schemas en un array.
 *
 * Permite construir la lista de schemas de una página de forma declarativa.
 * Cada argumento es opcional. Solo se incluirán los schemas que tengan datos.
 *
 * Uso:
 *   const schemas = useSEOSchemas({ agency: agencyData, faq: faqData });
 *   return <SEO schemas={schemas} ... />
 */

import { generateInsuranceAgencySchema } from "../seo/InsuranceAgencySchema";
import { generateFAQSchema } from "../seo/FAQSchema";
import { generateBreadcrumbSchema } from "../seo/BreadcrumbSchema";
import { generateOrganizationSchema } from "../seo/OrganizationSchema";
import { generateArticleSchema } from "../seo/ArticleSchema";
import { generateReviewSchema } from "../seo/ReviewSchema";

export const useSEOSchemas = ({
  organization = null,
  agency = null,
  faq = null,
  breadcrumbs = null,
  article = null,
  reviews = null,
} = {}) => {
  const schemas = [];

  if (organization) schemas.push(generateOrganizationSchema(organization));
  if (agency) schemas.push(generateInsuranceAgencySchema(agency));
  if (faq && faq.length > 0) schemas.push(generateFAQSchema(faq));
  if (breadcrumbs && breadcrumbs.length > 0) schemas.push(generateBreadcrumbSchema(breadcrumbs));
  if (article) schemas.push(generateArticleSchema(article));
  if (reviews && reviews.length > 0) {
    reviews.forEach((review) => schemas.push(generateReviewSchema(review)));
  }

  return schemas;
};
