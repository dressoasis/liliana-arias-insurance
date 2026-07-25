import { Link } from "react-router-dom";
import { Text } from "../../../../components/ui/Text";
import { Heading } from "../../../../components/ui/Heading";
import { InteractiveCard } from "../../../../components/shared/Cards/InteractiveCard";

export const JourneyCard = ({ title, description, icon, actionText, href }) => {
  return (
    <InteractiveCard
      as={Link}
      to={href}
      icon={icon}
      actionText={actionText}
      spacing="md"
      className="focus:ring-2 focus:ring-primary focus:ring-offset-2"
      header={
        <Heading level="h3" className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
          {title}
        </Heading>
      }
    >
      <Text variant="muted" className="text-sm pt-1">
        {description}
      </Text>
    </InteractiveCard>
  );
};
