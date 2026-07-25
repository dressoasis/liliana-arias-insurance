// Primitiva base
export { buildSchema } from "./Schema";

// Meta y Social
export { generateOpenGraph } from "./OpenGraph";

// Componente React principal
export { SEO } from "./SEO";

// Schemas JSON-LD
export { generateOrganizationSchema } from "./OrganizationSchema";
export { generateLocalBusinessSchema } from "./LocalBusinessSchema";
export { generateInsuranceAgencySchema } from "./InsuranceAgencySchema";
export { generateFAQSchema } from "./FAQSchema";
export { generateBreadcrumbSchema } from "./BreadcrumbSchema";
export { generateArticleSchema } from "./ArticleSchema";
export { generateReviewSchema, buildAggregateRating } from "./ReviewSchema";

// Multi-location SEO Local
export { generateLocationSchema, generateMultiLocationSchemas } from "./LocalSEO";
