import { ComponentShowcase } from "../components/ComponentShowcase";
import { Button } from "../../../components/ui/Button";
import { CTAButton } from "../../../components/shared/Actions/CTAButton";
import { ScheduleButton } from "../../../components/shared/Actions/ScheduleButton";
import { Icon } from "../../../components/ui/Icon";

export const ButtonsView = () => {
  return (
    <div className="space-y-12">
      <ComponentShowcase 
        title="Variantes Básicas" 
        description="Los cuatro estilos fundamentales del componente Button estandarizado."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </ComponentShowcase>

      <ComponentShowcase 
        title="Estados y Tamaños" 
        description="Diferentes estados interactivos y tamaños disponibles."
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small (sm)</Button>
            <Button size="md">Medium (md)</Button>
            <Button size="lg">Large (lg)</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button disabled>Disabled State</Button>
            <Button loading>Loading State</Button>
            <Button variant="outline" loading>Loading Outline</Button>
          </div>
        </div>
      </ComponentShowcase>

      <ComponentShowcase 
        title="Iconos Integrados" 
        description="Soporte nativo para íconos a la izquierda o derecha."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button iconLeft={<Icon name="shield" className="w-4 h-4" />}>
            Seguro Activo
          </Button>
          <Button variant="outline" iconRight={<Icon name="chevron-right" className="w-4 h-4" />}>
            Siguiente Paso
          </Button>
        </div>
      </ComponentShowcase>

      <ComponentShowcase 
        title="Shared Actions (Patrón Decorator)" 
        description="Botones de negocio que extienden Button para inyectar lógica (Analytics, Calendly)."
      >
        <div className="flex flex-wrap items-center gap-4">
          <CTAButton trackingEvent="dev_click_test" variant="primary">
            CTA con Tracking
          </CTAButton>
          <ScheduleButton variant="secondary" iconLeft={<Icon name="calendar-heart" className="w-4 h-4"/>}>
            Agendar Cita (Calendly)
          </ScheduleButton>
        </div>
      </ComponentShowcase>
    </div>
  );
};
