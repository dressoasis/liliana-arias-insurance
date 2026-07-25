import { buildSchema } from "./Schema";

export const generateFAQSchema = (faqs) => {
  const mainEntity = faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }));

  return buildSchema("FAQPage", {
    mainEntity
  });
};
