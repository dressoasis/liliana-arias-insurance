// Base helper para estandarizar todos los esquemas JSON-LD
export const buildSchema = (type, data) => {
  return {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };
};
