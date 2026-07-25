import { ComponentShowcase } from "../components/ComponentShowcase";
import { JourneyCard } from "../../../features/home/sections/Journey/JourneyCard";

export const JourneyView = () => {
  return (
    <div className="space-y-12">
      <ComponentShowcase 
        title="Journey Card" 
        description="Tarjeta del flujo de pasos del cliente."
      >
        <div className="max-w-sm">
          <JourneyCard 
            title="Paso 1: Consulta"
            description="Agenda una cita gratuita con nuestros asesores para entender tus necesidades."
            icon="calendar-heart"
            actionText="Ver proceso"
            href="#"
          />
        </div>
      </ComponentShowcase>
    </div>
  );
};
