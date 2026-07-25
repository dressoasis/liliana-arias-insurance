/**
 * providers.js — Registro de proveedores de Analytics.
 *
 * Cada proveedor expone la misma interfaz: { initialize, track, pageView }.
 * Cuando se integre GA4 o Meta Pixel, solo se agrega un provider aquí.
 * Ningún componente sabrá qué proveedor está activo.
 */

// ─── Provider: Console (Desarrollo) ───────────────────────────────────────
const consoleProvider = {
  name: "console",
  initialize: () => {
    console.info("[Analytics] Console Provider inicializado en modo desarrollo.");
  },
  track: (eventName, properties) => {
    console.log(`%c[Analytics] ${eventName}`, "color: #6366f1; font-weight: bold;", properties);
  },
  pageView: (path, title) => {
    console.log(`%c[Analytics] Page View: ${path} — ${title}`, "color: #22c55e; font-weight: bold;");
  },
};

// ─── Provider: Google Analytics 4 (Preparado) ─────────────────────────────
const ga4Provider = {
  name: "ga4",
  initialize: (measurementId) => {
    // Integración Futura:
    // const script = document.createElement("script");
    // script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    // document.head.appendChild(script);
    // window.dataLayer = window.dataLayer || [];
    // window.gtag = function() { dataLayer.push(arguments); }
    // window.gtag("js", new Date());
    // window.gtag("config", measurementId);
    console.info(`[Analytics] GA4 Provider preparado. ID: ${measurementId || "NO_CONFIGURADO"}`);
  },
  track: (eventName, properties) => {
    // window.gtag?.("event", eventName, properties);
  },
  pageView: (path, title) => {
    // window.gtag?.("event", "page_view", { page_path: path, page_title: title });
  },
};

// ─── Provider: Meta Pixel (Preparado) ─────────────────────────────────────
const metaPixelProvider = {
  name: "meta",
  initialize: (pixelId) => {
    // Integración Futura: inyectar el snippet de fbq()
    console.info(`[Analytics] Meta Pixel preparado. ID: ${pixelId || "NO_CONFIGURADO"}`);
  },
  track: (eventName, properties) => {
    // window.fbq?.("track", eventName, properties);
  },
  pageView: () => {
    // window.fbq?.("track", "PageView");
  },
};

export const providers = { consoleProvider, ga4Provider, metaPixelProvider };
