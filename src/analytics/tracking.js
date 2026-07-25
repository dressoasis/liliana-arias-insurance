/**
 * tracking.js — Motor central de despacho de eventos.
 *
 * Actúa como un "bus de eventos". Todos los componentes llaman a track().
 * Internamente, éste despacha el evento a todos los providers activos.
 * Si mañana se añade Mixpanel, no se toca ningún componente.
 */

import { providers } from "./providers";

const isDev = import.meta.env?.MODE === "development";

// Lista de providers activos (se puede configurar dinámicamente)
let activeProviders = isDev ? [providers.consoleProvider] : [];

// ─── Inicialización ────────────────────────────────────────────────────────
export const initializeAnalytics = ({ ga4Id, metaPixelId } = {}) => {
  activeProviders = [];

  if (isDev) {
    activeProviders.push(providers.consoleProvider);
    providers.consoleProvider.initialize();
  }

  if (ga4Id) {
    activeProviders.push(providers.ga4Provider);
    providers.ga4Provider.initialize(ga4Id);
  }

  if (metaPixelId) {
    activeProviders.push(providers.metaPixelProvider);
    providers.metaPixelProvider.initialize(metaPixelId);
  }
};

// ─── Despacho de Evento ────────────────────────────────────────────────────
export const track = (eventName, properties = {}) => {
  const payload = {
    ...properties,
    timestamp: new Date().toISOString(),
  };

  activeProviders.forEach((provider) => {
    try {
      provider.track(eventName, payload);
    } catch (error) {
      console.error(`[Analytics] Error en provider "${provider.name}":`, error);
    }
  });
};

// ─── Page View ────────────────────────────────────────────────────────────
export const trackPageView = (path, title) => {
  activeProviders.forEach((provider) => {
    try {
      provider.pageView(path, title);
    } catch (error) {
      console.error(`[Analytics] PageView error en "${provider.name}":`, error);
    }
  });
};

// ─── Eventos Predefinidos (azúcar sintáctico) ──────────────────────────────
// Facilitan el uso en los CTAButtons sin importar EventName cada vez.
import { EventName } from "./events";

export const trackCTAClick = (label, location, variant) =>
  track(EventName.CTA_CLICK, { label, location, variant });

export const trackPhoneClick = (phone_number, location) =>
  track(EventName.PHONE_CLICK, { phone_number, location });

export const trackWhatsAppClick = (phone_number, location, message_template = "default") =>
  track(EventName.WHATSAPP_CLICK, { phone_number, location, message_template });

export const trackScheduleClick = (location, calendar_provider = "calendly") =>
  track(EventName.SCHEDULE_CLICK, { location, calendar_provider });

export const trackNavClick = (link_text, link_url, is_mobile = false) =>
  track(EventName.NAV_LINK_CLICK, { link_text, link_url, is_mobile });

export const trackFormSubmit = (form_id, form_name, success = true) =>
  track(EventName.FORM_SUBMIT, { form_id, form_name, success });

export const trackScrollDepth = (depth_percent, page_path) =>
  track(EventName.SCROLL_DEPTH, { depth_percent, page_path });
