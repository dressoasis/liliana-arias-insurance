import { Section } from "../../../../components/ui/Section";
import { Container } from "../../../../components/ui/Container";
import { Heading } from "../../../../components/ui/Heading";
import { Text } from "../../../../components/ui/Text";
import { CompanyLogo } from "./CompanyLogo";
import { companiesContent } from "../../../../content/home/companies";

export const CompaniesSection = () => {
  const { title, description, partners } = companiesContent;

  return (
    <Section
      spacing="base"
      background="background"
      as="section"
      aria-labelledby="companies-heading"
    >
      <Container>
        {/* Section Header — visualmente discreto, no es el foco principal */}
        <div className="text-center mb-12 max-w-xl mx-auto">
          <Heading
            id="companies-heading"
            level="h2"
            className="text-2xl md:text-3xl font-bold tracking-tight text-balance mb-4"
          >
            {title}
          </Heading>
          <Text
            variant="muted"
            className="text-base leading-relaxed max-w-[44ch] mx-auto text-balance"
          >
            {description}
          </Text>
        </div>

        {/* Separador superior — contexto visual de "socios" */}
        <div className="border-t border-border/50 pt-10">
          {/*
           * Grid de logos:
           * - Mobile:  2 columnas
           * - Tablet:  3 columnas
           * - Desktop: 5 columnas
           *
           * Para agregar compañías: editar companies.js únicamente.
           */}
          <ul
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 list-none p-0 m-0"
            aria-label="Compañías aseguradoras asociadas"
          >
            {partners.map((company) => (
              <li key={company.id} className="flex items-center justify-center">
                <CompanyLogo company={company} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
};
