import { ComponentShowcase } from "../components/ComponentShowcase";
import { Container } from "../../../components/ui/Container";
import { Section } from "../../../components/ui/Section";
import { Grid } from "../../../components/layout/Grid";
import { Flex } from "../../../components/layout/Flex";
import { Text } from "../../../components/ui/Text";

export const LayoutView = () => {
  return (
    <div className="space-y-12">
      <ComponentShowcase 
        title="Grid System" 
        description="Grillas responsive preconfiguradas."
      >
        <Grid cols="3" gap="6">
          <div className="bg-surface p-4 border border-border rounded-lg text-center"><Text>Columna 1</Text></div>
          <div className="bg-surface p-4 border border-border rounded-lg text-center"><Text>Columna 2</Text></div>
          <div className="bg-surface p-4 border border-border rounded-lg text-center"><Text>Columna 3</Text></div>
        </Grid>
      </ComponentShowcase>

      <ComponentShowcase 
        title="Flex System" 
        description="Layouts flexibles para alinear contenido."
      >
        <Flex justify="between" align="center" className="bg-surface p-4 border border-border rounded-lg">
          <Text>Izquierda</Text>
          <Text>Centro</Text>
          <Text>Derecha</Text>
        </Flex>
      </ComponentShowcase>

      <ComponentShowcase 
        title="Container & Section" 
        description="Section maneja el padding vertical, Container asegura el ancho máximo y padding lateral."
      >
        <Section spacing="sm" className="bg-primary/5 border border-primary/20 rounded-xl">
          <Container size="md">
            <div className="bg-background p-8 text-center rounded-lg shadow-sm border border-border">
              <Text>Contenido dentro de Container (md) dentro de Section (sm)</Text>
            </div>
          </Container>
        </Section>
      </ComponentShowcase>
    </div>
  );
};
