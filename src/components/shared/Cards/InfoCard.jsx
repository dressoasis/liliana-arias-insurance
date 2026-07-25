import { Heading } from "../../ui/Heading";
import { Text } from "../../ui/Text";
import { BaseCard } from "./BaseCard";

export const InfoCard = ({ title, value, description, icon, ...props }) => {
  return (
    <BaseCard
      icon={icon}
      variant="default"
      spacing="sm"
      {...props}
    >
      <div className="space-y-1.5 pt-2">
          <Text variant="small" className="font-bold uppercase tracking-widest text-muted">
            {title}
          </Text>
          <Heading level="h3" className="text-3xl font-extrabold text-text">
            {value}
          </Heading>
          {description && (
            <Text variant="caption" className="mt-2 block">
              {description}
            </Text>
          )}
        </div>
    </BaseCard>
  );
};
