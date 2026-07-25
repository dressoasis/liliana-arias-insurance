// Registro inmutable de las URLs para evitar Magic Strings
export const AppRoutes = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  SERVICES: {
    ROOT: "/services",
    LIFE: "/services/life",
    HEALTH: "/services/health",
    MEDICARE: "/services/medicare",
  },
  JOURNEY: {
    ROOT: "/journey",
    TURNING_65: "/journey/turning-65",
  },
};

// Traductor de rutas a títulos limpios para Breadcrumbs
export const getRouteTitle = (path) => {
  const titles = {
    [AppRoutes.HOME]: "Inicio",
    [AppRoutes.ABOUT]: "Nosotros",
    [AppRoutes.CONTACT]: "Contacto",
    [AppRoutes.SERVICES.ROOT]: "Servicios",
    [AppRoutes.SERVICES.LIFE]: "Seguro de Vida",
    [AppRoutes.SERVICES.HEALTH]: "Seguro de Salud",
    [AppRoutes.SERVICES.MEDICARE]: "Medicare",
  };
  
  // Fallback heurístico: Si no existe en el diccionario, toma la ruta y la capitaliza
  if (!titles[path]) {
    const slug = path.split("/").pop();
    if (!slug) return "Página";
    return slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ");
  }

  return titles[path];
};
