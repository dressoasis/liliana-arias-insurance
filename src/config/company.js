/**
 * company.js — Información legal y corporativa.
 * No debe modificarse con frecuencia. Solo datos factuales de la empresa.
 */
export const companyConfig = {
  legalName: "Liliana Arias Insurance LLC",
  displayName: "Liliana Arias Insurance",
  foundedYear: 2018,
  licenseNumber: "L123456", // Número de licencia de seguros (actualizar)
  licenseStates: ["FL", "TX", "GA", "NY"], // Estados con licencia activa
  npn: "12345678", // National Producer Number (NIPR)
  ein: null, // EIN — mantener en null hasta confirmar
  // Dirección registrada
  registeredAddress: {
    street: "",
    city: "",
    state: "FL",
    zip: "",
    country: "US",
  },
  // Representante principal
  principal: {
    name: "Liliana Arias",
    title: "Licensed Insurance Agent",
    licenseNumber: "L123456",
  },
};
