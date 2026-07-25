import { useNavigation } from "./NavigationProvider";
import { NavigationItem } from "./NavigationItem";
import { ScheduleButton } from "../shared/Actions/ScheduleButton";

export const DesktopNavigation = () => {
  const { navigationData } = useNavigation();

  return (
    <nav className="hidden lg:flex items-center space-x-6" aria-label="Navegación Desktop">
      {/* Links de Navegación centralizados */}
      <div className="flex items-center gap-6">
        {navigationData.mainNav.map(item => (
          <NavigationItem key={item.id} item={item} isMobile={false} />
        ))}
      </div>
      
      {/* Separador y CTA */}
      <div className="pl-8 border-l border-border flex items-center">
        <ScheduleButton variant="primary" size="lg" className="rounded-full px-8 py-3 text-[15px] font-bold tracking-wide shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300">
          {navigationData.cta.label}
        </ScheduleButton>
      </div>
    </nav>
  );
};
