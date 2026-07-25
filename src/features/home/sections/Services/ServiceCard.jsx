import { Link } from "react-router-dom";
import { Icon } from "../../../../components/ui/Icon";
import { Badge } from "../../../../components/ui/Badge";
import { Heading } from "../../../../components/ui/Heading";
import { Text } from "../../../../components/ui/Text";
import { clsx } from "clsx";

export const ServiceCard = ({ service, index }) => {
  const { icon, title, description, badge, href } = service;

  return (
    <Link
      to={href}
      className={clsx(
        // Base
        "group relative flex flex-col bg-background rounded-2xl p-7 overflow-hidden",
        // Borde sutil que cambia en hover
        "border border-border/60 hover:border-primary/30",
        // Sombra que se profundiza en hover
        "shadow-sm shadow-black/5 hover:shadow-xl hover:shadow-primary/8",
        // Elevación
        "hover:-translate-y-1.5",
        // Transición fluida
        "transition-all duration-300 ease-out",
        // Animación de entrada escalonada
        "animate-in fade-in slide-in-from-bottom-5 fill-mode-both"
      )}
      style={{ animationDelay: `${index * 80}ms`, animationDuration: "500ms" }}
      aria-label={`Ver detalles sobre ${title}`}
    >
      {/* Resplandor sutil en hover — efecto "luz interior" */}
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        aria-hidden="true"
      />

      {/* Header: Ícono + Badge */}
      <div className="flex items-start justify-between mb-6">
        {/* Ícono con fondo animado */}
        <div
          className={clsx(
            "flex items-center justify-center w-12 h-12 rounded-xl",
            "bg-primary/8 group-hover:bg-primary/15",
            "transition-colors duration-300"
          )}
          aria-hidden="true"
        >
          <Icon
            name={icon}
            className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Badge de categoría */}
        <Badge
          variant="outline"
          className="text-[11px] font-semibold tracking-wide shrink-0"
        >
          {badge}
        </Badge>
      </div>

      {/* Body: Título + Descripción */}
      <div className="flex-1 flex flex-col gap-3 mb-6">
        <Heading
          level="h3"
          className="text-xl font-bold text-text leading-snug group-hover:text-primary transition-colors duration-300"
        >
          {title}
        </Heading>
        <Text
          variant="muted"
          className="text-sm leading-relaxed"
        >
          {description}
        </Text>
      </div>

      {/* Footer: CTA arrow */}
      <div className="flex items-center gap-2 mt-auto">
        <Text
          variant="small"
          className="font-semibold text-primary text-sm"
        >
          Conocer más
        </Text>
        {/* Flecha que se desplaza en hover */}
        <Icon
          name="arrow-right"
          className="w-4 h-4 text-primary transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </div>

      {/* Línea decorativa inferior que crece desde la izquierda en hover */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/30 w-0 group-hover:w-full transition-all duration-500 ease-out"
        aria-hidden="true"
      />
    </Link>
  );
};
