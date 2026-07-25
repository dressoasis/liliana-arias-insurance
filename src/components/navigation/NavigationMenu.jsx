import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { NavigationProvider } from "./NavigationProvider";

// Orquestador principal de navegación
export const NavigationMenu = () => {
  return (
    <NavigationProvider>
      <div className="flex items-center justify-end w-full">
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </NavigationProvider>
  );
};
