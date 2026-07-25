import { Heading } from "../../ui/Heading";
import { Text } from "../../ui/Text";
import { BaseCard } from "./BaseCard";

export const FeatureCard = ({ title, description, icon, ...props }) => {
  return (
    <BaseCard
      icon={icon}
      variant="elevated"
      spacing="md"
      header={
        <Heading level="h4" className="text-lg">
          {title}
        </Heading>
      }
      {...props}
    >
      <Text variant="muted" className="text-sm leading-relaxed">
          {description}
        </Text>
    </BaseCard>
  );
};
