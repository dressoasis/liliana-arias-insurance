import { Icon } from "../../ui/Icon";
import { CTAButton } from "./CTAButton";
import { logger } from "../../../utils/logger";

/**
 * ScheduleButton
 * 
 * Especialización orientada a la conversión principal: Agendamiento.
 * Preparado para disparar un modal de Calendly o redirigir a una ruta de calendario.
 */
export const ScheduleButton = ({ 
  calendlyUrl, 
  children = "Agendar cita",
  ...props 
}) => {
  const handleScheduleClick = () => {
    // Integración Futura: Disparar el Popup/Widget nativo de Calendly
    if (calendlyUrl) {
      window.open(calendlyUrl, "_blank", "noopener,noreferrer");
    } else {
      logger.info("[Calendly] Preparando para inyectar o abrir Modal nativo de calendario...");
      // Ej: window.Calendly.initPopupWidget({ url: '...' });
    }
  };

  return (
    <CTAButton
      iconLeft={<Icon name="calendar-heart" className="w-5 h-5" />}
      onClick={handleScheduleClick}
      trackingEvent="schedule_appointment_clicked"
      {...props}
    >
      {children}
    </CTAButton>
  );
};
