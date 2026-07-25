/**
 * logger.js — Sistema centralizado de logs.
 *
 * En producción (import.meta.env.PROD === true), los logs informativos y de debug
 * se suprimen automáticamente para evitar filtrar información sensible o ensuciar
 * la consola del usuario.
 *
 * Métodos:
 * - logger.debug(): Información detallada solo útil para el desarrollador.
 * - logger.info(): Trazabilidad de flujo (ej. Analytics).
 * - logger.warn(): Advertencias que no rompen la app pero requieren atención.
 * - logger.error(): Errores graves (ej. fallas de API o excepciones no manejadas).
 */

const isDev = import.meta.env.DEV;

export const logger = {
  debug: (...args) => {
    if (isDev) {
      console.debug("[DEBUG]", ...args);
    }
  },
  info: (...args) => {
    if (isDev) {
      console.info("[INFO]", ...args);
    }
  },
  warn: (...args) => {
    // Los warnings pueden ser útiles en producción para monitoreo, pero
    // por ahora los limitaremos a DEV, o podemos dejarlos si hay un tracker.
    if (isDev) {
      console.warn("[WARN]", ...args);
    }
  },
  error: (...args) => {
    // Los errores SIEMPRE se imprimen, incluso en producción, ya que son críticos
    // y podrían ser capturados por Sentry o Datadog.
    console.error("[ERROR]", ...args);
  },
};
