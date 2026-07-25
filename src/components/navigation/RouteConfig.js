// Registro inmutable de las URLs para evitar Magic Strings
export const AppRoutes = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  SERVICES: {
    ROOT: "/services",
    MEDICARE: "/services/medicare",
    MARKETPLACE: "/services/marketplace",
    LIFE: "/services/life-insurance",
    DENTAL: "/services/dental-vision",
    FINAL_EXPENSE: "/services/final-expense",
    CRITICAL_ILLNESS: "/services/critical-illness",
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
    [AppRoutes.SERVICES.MEDICARE]: "Medicare",
    [AppRoutes.SERVICES.MARKETPLACE]: "Marketplace ACA",
    [AppRoutes.SERVICES.LIFE]: "Seguro de Vida",
    [AppRoutes.SERVICES.DENTAL]: "Odontología y Visión",
    [AppRoutes.SERVICES.FINAL_EXPENSE]: "Gastos Finales",
    [AppRoutes.SERVICES.CRITICAL_ILLNESS]: "Enfermedad Crítica",
  };

  // Fallback heurístico: Si no existe en el diccionario, toma la ruta y la capitaliza
  if (!titles[path]) {
    const slug = path.split("/").pop();
    if (!slug) return "Página";
    return slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ");
  }

  return titles[path];
};
