import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { clsx } from "clsx";
import { useNavigation } from "./NavigationProvider";
import { NavigationItem } from "./NavigationItem";
import { WhatsAppButton } from "../shared/Actions/WhatsAppButton";
import { Icon } from "../ui/Icon";

export const MobileNavigation = () => {
  const { navigationData, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useNavigation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Bloqueo de scroll cuando el modal móvil está activo
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  const menuOverlay = mounted ? createPortal(
    <div
      className={clsx(
        "fixed inset-0 top-[72px] md:top-[88px] lg:top-[104px] z-40 bg-white/95 backdrop-blur-xl flex flex-col transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-y-auto border-t border-slate-200 shadow-2xl",
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
      <div className="p-6 pb-12 bg-slate-50/80 border-t border-slate-200">
        <WhatsAppButton 
          phoneNumber="12109293721"
          className="w-full rounded-full shadow-lg py-4 text-lg justify-center flex items-center"
          onClick={closeMobileMenu}
        >
          {navigationData.cta.label}
        </WhatsAppButton>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <div className="lg:hidden flex items-center">
      {/* Trigger Button */}
      <button
        onClick={toggleMobileMenu}
        className={clsx(
          "p-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:ring-offset-2 z-50 relative",
          isMobileMenuOpen ? "text-[#0284c7] bg-[#0284c7]/10" : "text-slate-800 hover:bg-slate-100"
        )}
        aria-expanded={isMobileMenuOpen}
        aria-label="Abrir menú de navegación"
      >
        <Icon name={isMobileMenuOpen ? "x" : "menu"} className="w-5 h-5" />
      </button>

      {/* Fullscreen Overlay Apple-style */}
      {menuOverlay}
    </div>
  );
};
