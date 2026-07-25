import { ComponentShowcase } from "../components/ComponentShowcase";
import { Text } from "../../../components/ui/Text";

export const DesignSystemView = () => {
  return (
    <div className="space-y-12">
      <ComponentShowcase 
        title="Colores Semánticos (Tokens)" 
        description="Paleta de colores oficial. No se permiten colores hardcodeados en Tailwind."
      >
        <div className="flex flex-wrap gap-4">
          <ColorSwatch name="Primary" className="bg-primary text-primary-foreground" />
          <ColorSwatch name="Secondary" className="bg-secondary text-secondary-foreground" />
          <ColorSwatch name="Accent" className="bg-accent text-accent-foreground" />
          <ColorSwatch name="Background" className="bg-background text-text border border-border" />
          <ColorSwatch name="Surface" className="bg-surface text-text border border-border" />
          <ColorSwatch name="Success" className="bg-success text-white" />
          <ColorSwatch name="Error" className="bg-error text-white" />
          <ColorSwatch name="Warning" className="bg-[#eab308] text-white" />
        </div>
      </ComponentShowcase>

      <ComponentShowcase 
        title="Border Radius (Radii)" 
        description="Radios de borde estandarizados."
      >
        <div className="flex gap-6">
          <div className="w-24 h-24 bg-surface border border-border rounded-sm flex items-center justify-center"><Text variant="small">sm</Text></div>
          <div className="w-24 h-24 bg-surface border border-border rounded-md flex items-center justify-center"><Text variant="small">md</Text></div>
          <div className="w-24 h-24 bg-surface border border-border rounded-lg flex items-center justify-center"><Text variant="small">lg</Text></div>
          <div className="w-24 h-24 bg-surface border border-border rounded-xl flex items-center justify-center"><Text variant="small">xl</Text></div>
          <div className="w-24 h-24 bg-surface border border-border rounded-full flex items-center justify-center"><Text variant="small">full</Text></div>
        </div>
      </ComponentShowcase>
    </div>
  );
};

const ColorSwatch = ({ name, className }) => (
  <div className={`w-32 h-32 rounded-xl flex flex-col justify-end p-4 shadow-sm ${className}`}>
    <span className="font-semibold text-sm">{name}</span>
  </div>
);
