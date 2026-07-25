import { Button } from "../../ui/Button";
import { logger } from "../../../utils/logger";

/**
 * CTAButton (Call To Action Base Button)
 * 
 * Actúa como una capa intermedia entre el Button base (UI) y las lógicas de negocio.
 * Su responsabilidad es interceptar los clics para inyectar tracking de Analytics
 * antes de ejecutar la acción principal, sin duplicar la lógica de estilos o estados.
 */
export const CTAButton = ({ 
  children, 
  onClick, 
  trackingEvent, 
  trackingData = {}, 
  ...props 
}) => {
  const handleClick = (e) => {
    // 1. Integración Futura: Tracking de Analytics (Google Analytics, Mixpanel, etc.)
    if (trackingEvent) {
      logger.info(`[Analytics Track] Event: ${trackingEvent}`, trackingData);
      // ej: window.dataLayer.push({ event: trackingEvent, ...trackingData });
    }

    // 2. Ejecutar la lógica de negocio original
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
};
