import { useLocation } from "react-router-dom";
import { generateOpenGraph } from "./OpenGraph";

/**
 * Componente SEO principal.
 * Gracias a React 19, podemos renderizar `<title>` y `<meta>` directamente
 * en el JSX sin necesidad de utilizar react-helmet o librerías de terceros.
 * React se encarga de hacer el "hoisting" de estos elementos al <head>.
 */
export const SEO = ({
  title,
  description,
  canonicalUrl,
  ogImage,
  ogType = "website",
  twitterHandle,
  schemas = []
}) => {
  const location = useLocation();
  // Idealmente se configura en el archivo .env
  const baseUrl = import.meta.env?.VITE_PUBLIC_URL || (typeof window !== 'undefined' ? window.location.origin : "");
  const currentUrl = canonicalUrl || `${baseUrl}${location.pathname}`;

  const openGraphTags = generateOpenGraph({
    title,
    description,
    url: currentUrl,
    image: ogImage,
    type: ogType
  });

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph */}
      {openGraphTags.map((tag, index) => (
        <meta key={`og-${index}`} property={tag.property} content={tag.content} />
      ))}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}

      {/* JSON-LD Schemas (Estructura de datos rica para Google) */}
      {schemas.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)}
        </script>
      )}
    </>
  );
};
