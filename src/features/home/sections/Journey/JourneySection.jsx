import { Section } from "../../../../components/ui/Section";
import { Container } from "../../../../components/ui/Container";
import { Badge } from "../../../../components/ui/Badge";
import { Heading } from "../../../../components/ui/Heading";
import { Text } from "../../../../components/ui/Text";
import { JourneyGrid } from "./JourneyGrid";
import { journeyContent } from "../../../../content/home/journey";

export const JourneySection = () => {
  return (
    <Section spacing="lg" className="bg-surface/30 relative">
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4">
          <Badge variant="primary">{journeyContent.badge}</Badge>
          <Heading level="h2" className="text-balance">{journeyContent.title}</Heading>
          <Text variant="lead" className="text-balance">{journeyContent.description}</Text>
        </div>
        
        <JourneyGrid situations={journeyContent.situations} />
      </Container>
    </Section>
  );
};
