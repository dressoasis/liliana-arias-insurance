import { ComponentShowcase } from "../components/ComponentShowcase";
import { Breadcrumbs } from "../../../components/navigation/Breadcrumbs";
import { NavigationProvider } from "../../../components/navigation/NavigationProvider";
import { DesktopNavigation } from "../../../components/navigation/DesktopNavigation";
import { MobileNavigation } from "../../../components/navigation/MobileNavigation";

export const NavigationView = () => {
  return (
    <div className="space-y-12">
      <ComponentShowcase 
        title="Breadcrumbs" 
        description="Navegación por migas de pan dinámica."
      >
        <div className="p-4 border border-border rounded-lg bg-surface">
          <Breadcrumbs />
        </div>
      </ComponentShowcase>

      <ComponentShowcase 
        title="Desktop Navigation" 
        description="Menú de escritorio extraído de su contexto (requiere NavigationProvider)."
      >
        <div className="p-4 border border-border rounded-lg bg-surface flex justify-end">
          <NavigationProvider>
            <DesktopNavigation />
          </NavigationProvider>
        </div>
      </ComponentShowcase>

      <ComponentShowcase 
        title="Mobile Navigation Trigger" 
        description="El botón que dispara el menú móvil a pantalla completa."
      >
        <div className="p-4 border border-border rounded-lg bg-surface flex justify-end">
          <NavigationProvider>
            {/* Solo se verá el trigger si forzamos a que piense que está en mobile o usamos las clases de tailwind */}
            <div className="lg:hidden block w-full text-right">
              <MobileNavigation />
            </div>
            <div className="hidden lg:block text-sm text-muted">
              Redimensiona la ventana a tamaño móvil para ver el botón del menú.
            </div>
          </NavigationProvider>
        </div>
      </ComponentShowcase>
    </div>
  );
};
