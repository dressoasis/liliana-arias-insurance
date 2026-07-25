import { useCallback, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  track,
  trackPageView,
  trackScrollDepth,
  trackCTAClick,
  trackPhoneClick,
  trackWhatsAppClick,
  trackScheduleClick,
  trackNavClick,
  trackFormSubmit,
} from "../analytics/tracking";
import { EventName } from "../analytics/events";

/**
 * useAnalytics — Hook principal de analytics para componentes.
 *
 * Expone funciones estables (memoizadas) para disparar eventos
 * sin que el componente necesite conocer el motor de tracking.
 */
export const useAnalytics = () => {
  return {
    track: useCallback(track, []),
    trackCTAClick: useCallback(trackCTAClick, []),
    trackPhoneClick: useCallback(trackPhoneClick, []),
    trackWhatsAppClick: useCallback(trackWhatsAppClick, []),
    trackScheduleClick: useCallback(trackScheduleClick, []),
    trackNavClick: useCallback(trackNavClick, []),
    trackFormSubmit: useCallback(trackFormSubmit, []),
    EventName, // Re-exportado para conveniencia
  };
};

/**
 * usePageView — Rastrea automáticamente cada cambio de ruta.
 * Debe usarse una sola vez en el layout principal (MainLayout).
 */
export const usePageView = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location.pathname]);
};

/**
 * useScrollDepth — Rastrea el depth de scroll del usuario.
 * Dispara eventos en hitos: 25%, 50%, 75%, 100%.
 * Implementado con IntersectionObserver para máximo rendimiento (0 listeners de scroll).
 */
export const useScrollDepth = () => {
  const milestones = useRef(new Set());
  const location = useLocation();

  useEffect(() => {
    // Reiniciar milestones en cada cambio de página
    milestones.current.clear();

    const checkpoints = [25, 50, 75, 100];

    const observers = checkpoints.map((percent) => {
      const sentinel = document.createElement("div");
      sentinel.style.position = "absolute";
      sentinel.style.top = `${percent}%`;
      sentinel.style.height = "1px";
      sentinel.style.width = "1px";
      sentinel.style.pointerEvents = "none";
      document.body.appendChild(sentinel);

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !milestones.current.has(percent)) {
            milestones.current.add(percent);
            trackScrollDepth(percent, location.pathname);
          }
        },
        { threshold: 0 }
      );

      observer.observe(sentinel);
      return { observer, sentinel };
    });

    return () => {
      observers.forEach(({ observer, sentinel }) => {
        observer.disconnect();
        sentinel.remove();
      });
    };
  }, [location.pathname]);
};
