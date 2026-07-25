import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { navigationContent } from "../../content/site/navigation";

// Creamos un contexto para no hacer prop-drilling con el estado del menú
const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };
  const closeDropdown = () => setActiveDropdown(null);

  // Determina con alta precisión si una ruta está activa
  const isActive = (href) => {
    if (!href) return false;
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <NavigationContext.Provider
      value={{
        navigationData: navigationContent,
        isMobileMenuOpen,
        toggleMobileMenu,
        closeMobileMenu,
        activeDropdown,
        toggleDropdown,
        closeDropdown,
        isActive,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation debe usarse dentro de un NavigationProvider");
  }
  return context;
};
