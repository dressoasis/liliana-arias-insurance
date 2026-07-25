import { buildSchema } from "./Schema";

export const generateBreadcrumbSchema = (items) => {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }));

  return buildSchema("BreadcrumbList", {
    itemListElement
  });
};
