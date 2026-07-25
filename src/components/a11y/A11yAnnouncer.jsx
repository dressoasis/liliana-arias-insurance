import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { VisuallyHidden } from "./VisuallyHidden";

export const A11yAnnouncer = () => {
  const [announcement, setAnnouncement] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Escucha cambios de ruta y notifica al Screen Reader
    // Se usa un ligero delay para permitir que el <title> se actualice primero.
    const timeoutId = setTimeout(() => {
      setAnnouncement(`Página cargada: ${document.title || location.pathname}`);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <div aria-live="polite" aria-atomic="true">
      <VisuallyHidden>{announcement}</VisuallyHidden>
    </div>
  );
};
