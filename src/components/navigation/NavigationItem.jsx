import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { Icon } from "../ui/Icon";
import { useNavigation } from "./NavigationProvider";

export const NavigationItem = ({ item, isMobile = false }) => {
  const { isActive, activeDropdown, toggleDropdown, closeDropdown, closeMobileMenu } = useNavigation();
  const active = isActive(item.href);
  const isDropdownOpen = activeDropdown === item.id;
  
  // Soporte directo para Enlaces Externos
  const isExternal = item.href?.startsWith("http");

  // Soporte para Dropdowns y Mega Menus
  if (item.submenu || item.megaMenu) {
    return (
      <div className={clsx("relative", isMobile ? "w-full" : "group")}>
        <button
          onClick={() => toggleDropdown(item.id)}
          className={clsx(
            "flex items-center justify-between gap-1 w-full font-medium transition-colors rounded-md",
            isMobile ? "text-lg py-3" : "text-sm px-4 py-2.5",
            active || isDropdownOpen ? "text-primary bg-surface/50" : "text-muted hover:text-text hover:bg-surface/50"
          )}
          aria-expanded={isDropdownOpen}
        >
          {item.label}
          <Icon 
            name="chevron-down" 
            className={clsx(
              "w-4 h-4 transition-transform duration-300 ease-out", 
              isDropdownOpen ? "rotate-180 text-primary" : "opacity-60"
            )} 
          />
        </button>
        
        {/* Submenú Dropdown (Desktop flota, Mobile expande) */}
        {isDropdownOpen && (
          <div className={clsx(
            "flex flex-col transition-all duration-300 ease-out overflow-hidden origin-top",
            isMobile 
              ? "pl-4 mt-2 space-y-1 border-l-2 border-border/40" 
              : "absolute top-full left-0 mt-1 min-w-[240px] bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-2xl p-2 z-50 gap-1 animate-in slide-in-from-top-2 fade-in"
          )}>
            {item.submenu?.map(subItem => (
              <NavigationItem key={subItem.id} item={subItem} isMobile={isMobile} />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Enlaces Externos
  if (isExternal) {
    return (
      <a 
        href={item.href} 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={isMobile ? closeMobileMenu : undefined}
        className={clsx(
          "flex items-center justify-between gap-1.5 font-medium transition-colors rounded-md",
          isMobile ? "text-lg py-3 w-full" : "text-sm px-4 py-2.5",
          "text-muted hover:text-primary hover:bg-surface/50"
        )}
      >
        {item.label}
        <Icon name="chevron-right" className="w-3.5 h-3.5 opacity-40 -rotate-45" />
      </a>
    );
  }

  // Enlace Interno Regular
  return (
    <Link
      to={item.href}
      onClick={() => {
        closeDropdown();
        if (isMobile) closeMobileMenu();
      }}
      className={clsx(
        "font-medium transition-colors rounded-md block w-full",
        isMobile ? "text-lg py-3" : "text-sm px-4 py-2.5",
        active ? "text-primary bg-surface/80" : "text-muted hover:text-text hover:bg-surface/50"
      )}
      aria-current={active ? "page" : undefined}
    >
      {item.label}
    </Link>
  );
};
