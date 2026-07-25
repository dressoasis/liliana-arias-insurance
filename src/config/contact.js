/**
 * contact.js — Todos los canales de contacto disponibles.
 * PhoneButton, WhatsAppButton y el footer consumirán este archivo.
 */
export const contactConfig = {
  phone: {
    primary: "", // ej: "+13055550000"
    display: "", // ej: "(305) 555-0000"
    whatsapp: "", // Puede ser diferente al teléfono principal
  },
  email: {
    primary: "",       // ej: info@lilianaariasinsurance.com
    support: "",
    quotes: "",
  },
  address: {
    street: "",
    suite: "",
    city: "",
    state: "FL",
    zip: "",
    country: "US",
    mapsUrl: "", // URL de Google Maps embed o enlace directo
  },
  // Horario de atención
  businessHours: [
    { days: ["Lunes", "Viernes"], opens: "09:00", closes: "18:00" },
    { days: ["Sábado"], opens: "10:00", closes: "14:00" },
    { days: ["Domingo"], opens: null, closes: null }, // null = cerrado
  ],
  // Enlace para agendamiento (Calendly, Cal.com, etc.)
  scheduling: {
    provider: "calendly",
    url: "", // ej: https://calendly.com/lilianaarias
  },
};
