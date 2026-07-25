import { useEffect } from "react";
import { clsx } from "clsx";
import { useNavigation } from "./NavigationProvider";
import { NavigationItem } from "./NavigationItem";
import { ScheduleButton } from "../shared/Actions/ScheduleButton";
import { Icon } from "../ui/Icon";

export const MobileNavigation = () => {
  const { navigationData, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useNavigation();

  // Bloqueo de scroll cuando el modal móvil está activo
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  return (
    <div className="lg:hidden flex items-center">
      {/* Trigger Button */}
      <button
        onClick={toggleMobileMenu}
        className={clsx(
          "p-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          isMobileMenuOpen ? "text-primary bg-primary/10" : "text-text hover:bg-surface"
        )}
        aria-expanded={isMobileMenuOpen}
        aria-label="Abrir menú de navegación"
      >
        <Icon name={isMobileMenuOpen ? "x" : "menu"} className="w-5 h-5" />
      </button>

      {/* Fullscreen Overlay Apple-style */}
      <div
        className={clsx(
          "fixed inset-0 top-[80px] z-40 bg-background/95 backdrop-blur-3xl flex flex-col transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-y-auto border-t border-border/40 shadow-2xl",
          isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div className="flex-1 px-6 py-8">
          <nav className="flex flex-col space-y-4" aria-label="Navegación Móvil">
            {navigationData.mainNav.map(item => (
              <NavigationItem key={item.id} item={item} isMobile={true} />
            ))}
          </nav>
        </div>
        <div className="p-6 pb-12 bg-surface/30 border-t border-border/40">
          <ScheduleButton 
            fullWidth 
            size="lg" 
            className="rounded-full shadow-lg shadow-primary/20 py-4 text-lg"
            onClick={closeMobileMenu}
          >
            {navigationData.cta.label}
          </ScheduleButton>
        </div>
      </div>
    </div>
  );
};
