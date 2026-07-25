/**
 * analytics.js — IDs y configuración de plataformas de Analytics.
 * Las claves sensibles deben vivir en variables de entorno (.env).
 * Este archivo solo referencia las variables y define el comportamiento.
 */
export const analyticsConfig = {
  // ── Google Analytics 4 ────────────────────────────────────────
  ga4: {
    measurementId: import.meta.env.VITE_GA4_MEASUREMENT_ID || null,
    enabled: !!import.meta.env.VITE_GA4_MEASUREMENT_ID,
    // Parámetros que se envían en cada evento automáticamente
    defaultParams: {
      currency: "USD",
      language: "es",
    },
  },

  // ── Meta Pixel ────────────────────────────────────────────────
  meta: {
    pixelId: import.meta.env.VITE_META_PIXEL_ID || null,
    enabled: !!import.meta.env.VITE_META_PIXEL_ID,
  },

  // ── Google Tag Manager ────────────────────────────────────────
  gtm: {
    containerId: import.meta.env.VITE_GTM_ID || null,
    enabled: !!import.meta.env.VITE_GTM_ID,
  },

  // ── Comportamiento Global ─────────────────────────────────────
  // En desarrollo, los eventos solo van a consola.
  // En producción, van a todos los providers configurados.
  debug: import.meta.env.MODE === "development",
  consentRequired: true, // Preparado para GDPR / CCPA
};
