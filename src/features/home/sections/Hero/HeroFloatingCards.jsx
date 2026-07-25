import { Icon } from "../../../../components/ui/Icon";

/**
 * Mapa de acentos de color por categoría de seguro.
 * Cada widget tiene su identidad visual sin romper la paleta brand.
 */
const accentMap = {
  blue: {
    bg: "rgba(2, 132, 199, 0.08)",
    iconBg: "rgba(2, 132, 199, 0.12)",
    iconColor: "#0284c7",
    dot: "#0284c7",
  },
  indigo: {
    bg: "rgba(99, 102, 241, 0.07)",
    iconBg: "rgba(99, 102, 241, 0.11)",
    iconColor: "#6366f1",
    dot: "#6366f1",
  },
  sky: {
    bg: "rgba(14, 165, 233, 0.07)",
    iconBg: "rgba(14, 165, 233, 0.12)",
    iconColor: "#0ea5e9",
    dot: "#0ea5e9",
  },
  teal: {
    bg: "rgba(20, 184, 166, 0.07)",
    iconBg: "rgba(20, 184, 166, 0.11)",
    iconColor: "#14b8a6",
    dot: "#14b8a6",
  },
  violet: {
    bg: "rgba(139, 92, 246, 0.07)",
    iconBg: "rgba(139, 92, 246, 0.11)",
    iconColor: "#8b5cf6",
    dot: "#8b5cf6",
  },
  rose: {
    bg: "rgba(244, 63, 94, 0.07)",
    iconBg: "rgba(244, 63, 94, 0.10)",
    iconColor: "#f43f5e",
    dot: "#f43f5e",
  },
};

/**
 * Configuración de tamaño para cada widget.
 * No todos tienen el mismo ancho — crea ritmo visual.
 */
const sizeConfig = [
  { minWidth: "186px" },  // Medicare — ancho estándar
  { minWidth: "210px" },  // Marketplace ACA — más largo por el texto
  { minWidth: "178px" },  // Life Insurance
  { minWidth: "194px" },  // Dental & Vision
  { minWidth: "188px" },  // Final Expense
  { minWidth: "180px" },  // Critical Illness
];

export const HeroFloatingCards = ({ cards }) => {
  return (
    <div
      className="flex flex-row lg:flex-col flex-wrap lg:flex-nowrap gap-3 lg:gap-2.5 w-full lg:w-auto justify-center lg:justify-start"
      aria-label="Tipos de seguros disponibles"
    >
      {cards.map((card, index) => {
        const accent = accentMap[card.accent] || accentMap.blue;
        const size = sizeConfig[index] || {};

        return (
          <div
            key={card.id}
            className={[
              "group relative overflow-hidden cursor-default",
              "rounded-2xl px-4 py-3.5",
              "transition-all duration-300 ease-out",
              "hover:-translate-y-1 hover:shadow-xl",
              // Animación escalonada entrada desde la derecha
              "animate-in fade-in slide-in-from-right-6 fill-mode-both",
              // Offset alternado para perspectiva en desktop
              index % 2 === 0 ? "lg:self-start" : "lg:self-end lg:translate-x-3",
            ].join(" ")}
            style={{
              animationDelay: `${600 + index * 110}ms`,
              animationDuration: "550ms",
              minWidth: size.minWidth,
              background: "rgba(255, 255, 255, 0.82)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.9)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,1)"
            }}
          >
            {/* Acento de color muy sutil en la esquina superior */}
            <div
              className="absolute top-0 right-0 w-16 h-16 rounded-full pointer-events-none"
              style={{
                background: accent.bg,
                filter: "blur(12px)",
                transform: "translate(30%, -30%)"
              }}
              aria-hidden="true"
            />

            <div className="relative flex items-center gap-3">
              {/* Icono con fondo de color por categoría */}
              <div
                className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: accent.iconBg }}
                aria-hidden="true"
              >
                <Icon
                  name={card.icon || "shield"}
                  size={17}
                  className="shrink-0"
                  style={{ color: accent.iconColor }}
                />
              </div>

              {/* Contenido del widget */}
              <div className="flex flex-col min-w-0 gap-0.5">
                <span
                  className="font-bold leading-tight truncate"
                  style={{ fontSize: "13px", color: "#0c1a2e" }}
                >
                  {card.title}
                </span>
                <span
                  className="leading-tight truncate"
                  style={{ fontSize: "11px", color: "#64748b" }}
                >
                  {card.description}
                </span>
              </div>

              {/* Indicador de disponibilidad */}
              <div
                className="flex-shrink-0 ml-1 w-2 h-2 rounded-full animate-pulse"
                style={{
                  background: accent.dot,
                  boxShadow: `0 0 6px ${accent.dot}60`
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
