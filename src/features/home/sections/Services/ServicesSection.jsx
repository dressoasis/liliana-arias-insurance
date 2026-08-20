import { Link } from "react-router-dom";
import { Section } from "../../../../components/ui/Section";
import { Container } from "../../../../components/ui/Container";
import { Badge } from "../../../../components/ui/Badge";
import { Heading } from "../../../../components/ui/Heading";
import { Text } from "../../../../components/ui/Text";
import { Icon } from "../../../../components/ui/Icon";
import { ServiceCard } from "./ServiceCard";
import { servicesContent } from "../../../../content/home/services";

export const ServicesSection = () => {
  const { badge, title, description, cta, items } = servicesContent;

  return (
    <Section
      spacing="lg"
      background="surface"
      as="section"
      aria-labelledby="services-heading"
    >
      <Container>
        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <Badge
            variant="primary"
            className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-5 shadow-sm shadow-primary/15"
          >
            {badge}
          </Badge>

          <Heading
            id="services-heading"
            level="h2"
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-tight text-balance mb-5"
          >
            {title}
          </Heading>

          <Text
            variant="muted"
            className="text-lg leading-relaxed max-w-[52ch] text-balance"
          >
            {description}
          </Text>
        </div>

        {/* ── Services Grid: 1 col / 2 cols tablet / 3 cols desktop ── */}
        {/* gap-8 lg:gap-10 asegura el espacio entre tarjetas */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 list-none p-0 m-0"
          aria-label="Servicios disponibles"
        >
          {items.map((service, index) => (
            <li key={service.id} className="flex">
              <ServiceCard service={service} index={index} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};
