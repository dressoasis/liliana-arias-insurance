import { ComponentShowcase } from "../components/ComponentShowcase";
import { BaseCard } from "../../../components/shared/Cards/BaseCard";
import { InteractiveCard } from "../../../components/shared/Cards/InteractiveCard";
import { FeatureCard } from "../../../components/shared/Cards/FeatureCard";
import { InfoCard } from "../../../components/shared/Cards/InfoCard";
import { ArticleCard } from "../../../components/shared/Cards/ArticleCard";
import { CompanyCard } from "../../../components/shared/Cards/CompanyCard";
import { ServiceCard } from "../../../components/shared/Cards/ServiceCard";
import { Heading } from "../../../components/ui/Heading";
import { Text } from "../../../components/ui/Text";
import { Link } from "react-router-dom";

export const CardsView = () => {
  return (
    <div className="space-y-12">
      <ComponentShowcase 
        title="Base & Interactive Cards" 
        description="Primitivas compartidas sobre las que se construyen todas las demás tarjetas."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BaseCard header={<Heading level="h4">Base Card (Estática)</Heading>}>
            <Text>No tiene hover states ni interactividad por defecto. Ideal para paneles de información estática.</Text>
          </BaseCard>

          <InteractiveCard 
            header={<Heading level="h4">Interactive Card</Heading>}
            actionText="Ver Detalles"
            as={Link}
            to="#"
          >
            <Text>Hereda de BaseCard pero añade estados hover, cursor pointer, y un footer con chevron indicando acción.</Text>
          </InteractiveCard>
        </div>
      </ComponentShowcase>

      <ComponentShowcase 
        title="Tarjetas de Contenido (Domain Components)" 
        description="Implementaciones específicas que consumen BaseCard/InteractiveCard."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon="shield-check"
            title="Feature Card"
            description="Variante elevada. Usada para listar características clave del servicio o beneficios."
          />

          <ServiceCard
            icon="activity"
            title="Service Card"
            description="Variante interactiva. Usada para listar seguros o servicios específicos con un CTA claro."
            as={Link}
            to="#"
          />

          <InfoCard
            icon="users"
            title="Clientes Satisfechos"
            value="10k+"
            description="Métricas o datos destacables."
          />
        </div>
      </ComponentShowcase>

      <ComponentShowcase 
        title="Media Cards" 
        description="Tarjetas que integran imágenes y logos."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ArticleCard
            title="Cómo elegir el mejor seguro de vida en 2026"
            excerpt="Descubre los factores clave que debes considerar antes de firmar tu próxima póliza familiar..."
            category="Guía"
            date="12 Jul, 2026"
            imageSrc="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
            as={Link}
            to="#"
          />

          <div className="flex flex-col gap-4">
            <Text variant="small" className="font-semibold text-muted mb-2">Company Cards (ej. Aseguradoras Asociadas)</Text>
            <div className="grid grid-cols-2 gap-4">
              <CompanyCard name="Ambetter" />
              <CompanyCard name="Florida Blue" />
              <CompanyCard name="Oscar Health" />
              <CompanyCard name="Aetna" />
            </div>
          </div>
        </div>
      </ComponentShowcase>
    </div>
  );
};
