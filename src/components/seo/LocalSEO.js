/**
 * LocalSEO — Módulo de configuración multi-ciudad y multi-estado.
 *
 * Diseño:
 * - Cada "location" es un objeto independiente.
 * - La función generateLocationSchema() lo convierte en JSON-LD listo para inyectar.
 * - Es completamente agnóstico al contenido; solo define la estructura.
 */
import { generateInsuranceAgencySchema } from "./InsuranceAgencySchema";

/**
 * Genera un schema único por ubicación geográfica.
 * Útil para multi-location SEO (Miami, Orlando, Tampa, etc.)
 */
export const generateLocationSchema = (baseAgencyData, locationOverride = {}) => {
  return generateInsuranceAgencySchema({
    ...baseAgencyData,
    // La ubicación específica sobreescribe la base
    address: {
      ...baseAgencyData.address,
      ...locationOverride.address,
    },
    geo: {
      ...baseAgencyData.geo,
      ...locationOverride.geo,
    },
    telephone: locationOverride.telephone || baseAgencyData.telephone,
    url: locationOverride.url || baseAgencyData.url,
    // Área de servicio específica de esta sucursal/ciudad
    areaServed: locationOverride.areaServed || baseAgencyData.areaServed,
  });
};

/**
 * Genera un array de schemas para múltiples ubicaciones.
 * Se puede inyectar completo en el <script type="application/ld+json">.
 */
export const generateMultiLocationSchemas = (baseAgencyData, locations = []) => {
  if (!locations.length) return [generateInsuranceAgencySchema(baseAgencyData)];
  return locations.map((location) => generateLocationSchema(baseAgencyData, location));
};
