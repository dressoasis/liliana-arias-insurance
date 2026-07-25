/**
 * events.js — Registro centralizado de todos los eventos de Analytics.
 *
 * REGLA: Ningún componente inventa nombres de eventos.
 * Todos importan desde aquí. Esto garantiza consistencia de naming
 * entre Development, Staging y Production, y entre GA4, Meta Pixel y Mixpanel.
 */

// ─── Categorías ────────────────────────────────────────────────────────────
export const EventCategory = {
  CTA: "cta",
  NAVIGATION: "navigation",
  CONTACT: "contact",
  FORM: "form",
  ENGAGEMENT: "engagement",
  PAGE: "page",
};

// ─── Nombres de Eventos (snake_case: convención GA4) ───────────────────────
export const EventName = {
  // CTA Actions
  CTA_CLICK: "cta_click",
  PHONE_CLICK: "phone_click",
  WHATSAPP_CLICK: "whatsapp_click",
  SCHEDULE_CLICK: "schedule_click",

  // Navigation
  NAV_LINK_CLICK: "nav_link_click",
  MOBILE_MENU_OPEN: "mobile_menu_open",
  MOBILE_MENU_CLOSE: "mobile_menu_close",

  // Forms
  FORM_START: "form_start",
  FORM_SUBMIT: "form_submit",
  FORM_ERROR: "form_error",
  FORM_FIELD_FOCUS: "form_field_focus",

  // Engagement
  SCROLL_DEPTH: "scroll_depth",
  SECTION_VIEW: "section_view",
  JOURNEY_CARD_CLICK: "journey_card_click",

  // Page
  PAGE_VIEW: "page_view",
  PAGE_LEAVE: "page_leave",
};

// ─── Propiedades Estándar por Evento ──────────────────────────────────────
// Actúan como "contratos" que documentan qué datos acompaña cada evento.
export const EventSchema = {
  [EventName.CTA_CLICK]: {
    label: String,        // Texto del botón
    location: String,     // Sección donde aparece (ej: "hero", "footer")
    variant: String,      // Variante del botón (primary, secondary, etc.)
  },
  [EventName.PHONE_CLICK]: {
    phone_number: String,
    location: String,
  },
  [EventName.WHATSAPP_CLICK]: {
    phone_number: String,
    message_template: String,
    location: String,
  },
  [EventName.SCHEDULE_CLICK]: {
    calendar_provider: String, // "calendly" | "google" | "custom"
    location: String,
  },
  [EventName.NAV_LINK_CLICK]: {
    link_text: String,
    link_url: String,
    is_mobile: Boolean,
  },
  [EventName.FORM_SUBMIT]: {
    form_id: String,
    form_name: String,
    success: Boolean,
  },
  [EventName.FORM_ERROR]: {
    form_id: String,
    field_name: String,
    error_message: String,
  },
  [EventName.SCROLL_DEPTH]: {
    depth_percent: Number, // 25 | 50 | 75 | 100
    page_path: String,
  },
  [EventName.SECTION_VIEW]: {
    section_id: String,
    section_name: String,
  },
  [EventName.PAGE_VIEW]: {
    page_title: String,
    page_path: String,
    referrer: String,
  },
};
