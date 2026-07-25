import { ComponentShowcase } from "../components/ComponentShowcase";
import { Heading } from "../../../components/ui/Heading";
import { Text } from "../../../components/ui/Text";

export const TypographyView = () => {
  return (
    <div className="space-y-12">
      <ComponentShowcase 
        title="Headings (Jerarquía)" 
        description="Encabezados estructurales desde H1 hasta H4."
      >
        <div className="space-y-6">
          <Heading level="h1">H1: Título Principal de Página</Heading>
          <Heading level="h2">H2: Subtítulo de Sección</Heading>
          <Heading level="h3">H3: Título de Tarjeta o Bloque</Heading>
          <Heading level="h4">H4: Subtítulo Menor o Etiqueta</Heading>
        </div>
      </ComponentShowcase>

      <ComponentShowcase 
        title="Text (Variantes)" 
        description="Párrafos y textos de lectura con diferentes pesos visuales."
      >
        <div className="space-y-6">
          <div className="space-y-2">
            <Text variant="small" className="font-mono text-primary">variant="lead"</Text>
            <Text variant="lead">
              El texto lead se utiliza para párrafos introductorios o resúmenes importantes al inicio de una sección.
            </Text>
          </div>
          
          <div className="space-y-2">
            <Text variant="small" className="font-mono text-primary">variant="base"</Text>
            <Text variant="base">
              El texto base es el estándar para párrafos de contenido. Está diseñado con una altura de línea (line-height) cómoda para lectura prolongada.
            </Text>
          </div>

          <div className="space-y-2">
            <Text variant="small" className="font-mono text-primary">variant="muted"</Text>
            <Text variant="muted">
              El texto muted tiene menor opacidad. Útil para descripciones secundarias, notas al pie o metadatos donde no queremos distraer la atención principal.
            </Text>
          </div>

          <div className="space-y-2">
            <Text variant="small" className="font-mono text-primary">variant="small"</Text>
            <Text variant="small">
              Texto pequeño para legales, labels o disclaimers.
            </Text>
          </div>
        </div>
      </ComponentShowcase>
    </div>
  );
};
