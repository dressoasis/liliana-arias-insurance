import { ComponentShowcase } from "../components/ComponentShowcase";
import { Text } from "../../../components/ui/Text";

export const AnimationsView = () => {
  return (
    <div className="space-y-12">
      <ComponentShowcase 
        title="Micro-Interacciones" 
        description="Transiciones y efectos hover estandarizados en Tailwind."
      >
        <div className="flex gap-6">
          <div className="w-32 h-32 bg-surface border border-border rounded-xl flex items-center justify-center hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <Text variant="small">Scale + Shadow</Text>
          </div>
          
          <div className="w-32 h-32 bg-surface border border-border rounded-xl flex items-center justify-center hover:-translate-y-2 hover:border-primary transition-all duration-300 cursor-pointer text-center px-2">
            <Text variant="small">Lift + Border</Text>
          </div>
          
          <div className="w-32 h-32 bg-surface border border-border rounded-xl flex items-center justify-center group cursor-pointer text-center px-2">
            <Text variant="small" className="text-muted group-hover:text-primary transition-colors duration-300">Color Fade</Text>
          </div>
        </div>
      </ComponentShowcase>
    </div>
  );
};
