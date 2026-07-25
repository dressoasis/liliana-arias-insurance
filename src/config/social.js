/**
 * social.js — URLs de redes sociales y perfiles externos.
 * Los iconos del footer y el OrganizationSchema los consumen.
 */
export const socialConfig = {
  facebook: {
    url: "",
    handle: "",
    pageId: "", // Necesario para el Pixel de Meta
  },
  instagram: {
    url: "",
    handle: "",
  },
  linkedin: {
    url: "",
    handle: "",
  },
  youtube: {
    url: "",
    channelId: "",
  },
  twitter: {
    url: "",
    handle: "", // Con @
  },
  google: {
    businessUrl: "", // URL de Google Business Profile
    placeId: "",     // Para insertar reseñas de Google directamente
  },
  // Todos los links en array para el sameAs del OrganizationSchema
  get sameAs() {
    return [
      this.facebook.url,
      this.instagram.url,
      this.linkedin.url,
      this.youtube.url,
    ].filter(Boolean); // Filtra los vacíos automáticamente
  },
};
