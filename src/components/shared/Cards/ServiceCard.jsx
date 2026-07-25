import { Heading } from "../../ui/Heading";
import { Text } from "../../ui/Text";
import { InteractiveCard } from "./InteractiveCard";

export const ServiceCard = ({ title, description, icon, ...props }) => {
  return (
    <InteractiveCard
      icon={icon}
      spacing="lg"
      actionText="Saber más"
      header={
        <Heading level="h3" className="text-xl">
          {title}
        </Heading>
      }
      {...props}
    >
      <Text variant="muted" className="text-base leading-relaxed">
          {description}
        </Text>
    </InteractiveCard>
  );
};
