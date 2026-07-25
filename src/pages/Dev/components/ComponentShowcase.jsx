import { Heading } from "../../../components/ui/Heading";
import { Text } from "../../../components/ui/Text";
import { clsx } from "clsx";

export const ComponentShowcase = ({ title, description, children, className }) => {
  return (
    <div className="mb-16">
      <div className="mb-6">
        <Heading level="h3" className="text-2xl font-bold mb-2 text-text">
          {title}
        </Heading>
        {description && (
          <Text variant="muted" className="text-base">
            {description}
          </Text>
        )}
      </div>
      
      <div className={clsx(
        "p-8 rounded-2xl border border-border bg-background/50",
        "relative overflow-hidden group",
        className
      )}>
        {/* Etiqueta flotante de "Preview" */}
        <div className="absolute top-0 right-0 px-3 py-1 bg-surface border-b border-l border-border rounded-bl-lg text-xs font-mono text-muted uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
          Preview
        </div>
        
        {children}
      </div>
    </div>
  );
};
