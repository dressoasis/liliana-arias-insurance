import { buildSchema } from "./Schema";

/**
 * Article Schema
 * Para artículos del Blog y Learning Center.
 * Permite que Google muestre "Top Stories" en móvil y Rich Results.
 */
export const generateArticleSchema = ({
  type = "Article", // "Article" | "BlogPosting" | "NewsArticle"
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author = {},
  publisher = {},
  keywords = [],
}) => {
  return buildSchema(type, {
    headline,
    description,
    url,
    image: image ? {
      "@type": "ImageObject",
      url: image,
    } : undefined,
    datePublished,
    dateModified: dateModified || datePublished,
    keywords: keywords.join(", "),
    author: {
      "@type": author.type || "Person",
      name: author.name,
      url: author.url,
    },
    publisher: {
      "@type": "Organization",
      name: publisher.name,
      logo: publisher.logo ? {
        "@type": "ImageObject",
        url: publisher.logo,
      } : undefined,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  });
};
