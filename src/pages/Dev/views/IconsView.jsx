import { ComponentShowcase } from "../components/ComponentShowcase";
import { Icon } from "../../../components/ui/Icon";
import { Text } from "../../../components/ui/Text";

export const IconsView = () => {
  const iconNames = [
    "menu", "x", "chevron-down", "chevron-right", 
    "check-circle-2", "shield-check", "calendar-heart", 
    "activity", "shield-half", "check-circle", "help-circle", 
    "loader", "users", "star", "shield", "phone", "message-circle"
  ];

  return (
    <div className="space-y-12">
      <ComponentShowcase 
        title="Registro Centralizado (IconRegistry)" 
        description="Todos los iconos deben consumirse a través de <Icon name='...' /> para permitir el lazy loading y evitar el acoplamiento a librerías externas."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {iconNames.map(name => (
            <div key={name} className="flex flex-col items-center p-4 border border-border rounded-xl bg-surface hover:border-primary transition-colors cursor-default group">
              <Icon name={name} className="w-8 h-8 text-muted group-hover:text-primary transition-colors mb-3" />
              <Text variant="small" className="font-mono text-center break-all">{name}</Text>
            </div>
          ))}
        </div>
      </ComponentShowcase>
    </div>
  );
};
