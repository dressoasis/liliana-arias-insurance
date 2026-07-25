import { ComponentShowcase } from "../components/ComponentShowcase";
import { Hero } from "../../../features/home/sections/Hero/Hero";

export const HeroView = () => {
  return (
    <div className="space-y-12">
      <ComponentShowcase 
        title="Hero Section (Home)" 
        description="Componente principal de la vista de inicio. Renderizado completamente con el contenido inyectado."
      >
        <div className="rounded-xl overflow-hidden border border-border relative z-0">
          <Hero />
        </div>
      </ComponentShowcase>
    </div>
  );
};
