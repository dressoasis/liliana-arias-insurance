import { Link } from "react-router-dom";
import { Icon } from "../../../../components/ui/Icon";
import { Heading } from "../../../../components/ui/Heading";
import { Text } from "../../../../components/ui/Text";
import { clsx } from "clsx";

/**
 * Paleta de colores por servicio.
 * Cada variante define el fondo, el texto y el color de glow del icono,
 * así como el color de acento del borde y la línea inferior en hover.
 */
const colorVariants = {
  blue: {
    iconBg:        "bg-[#e0f2fe]",
    iconBgHover:   "group-hover:bg-[#bae6fd]",
    iconColor:     "text-[#0284c7]",
    glowColor:     "from-[#0284c7]/10",
    borderHover:   "hover:border-[#0284c7]/35",
    accentLine:    "from-[#0284c7] to-[#0284c7]/20",
    badgeBg:       "bg-[#e0f2fe] text-[#0369a1]",
    ctaColor:      "text-[#0284c7] group-hover:text-[#0369a1]",
    arrowColor:    "text-[#0284c7]",
  },
  emerald: {
    iconBg:        "bg-[#d1fae5]",
    iconBgHover:   "group-hover:bg-[#a7f3d0]",
    iconColor:     "text-[#059669]",
    glowColor:     "from-[#059669]/10",
    borderHover:   "hover:border-[#059669]/35",
    accentLine:    "from-[#059669] to-[#059669]/20",
    badgeBg:       "bg-[#d1fae5] text-[#047857]",
    ctaColor:      "text-[#059669] group-hover:text-[#047857]",
    arrowColor:    "text-[#059669]",
  },
  violet: {
    iconBg:        "bg-[#ede9fe]",
    iconBgHover:   "group-hover:bg-[#ddd6fe]",
    iconColor:     "text-[#7c3aed]",
    glowColor:     "from-[#7c3aed]/10",
    borderHover:   "hover:border-[#7c3aed]/35",
    accentLine:    "from-[#7c3aed] to-[#7c3aed]/20",
    badgeBg:       "bg-[#ede9fe] text-[#6d28d9]",
    ctaColor:      "text-[#7c3aed] group-hover:text-[#6d28d9]",
    arrowColor:    "text-[#7c3aed]",
  },
  amber: {
    iconBg:        "bg-[#fef3c7]",
    iconBgHover:   "group-hover:bg-[#fde68a]",
    iconColor:     "text-[#d97706]",
    glowColor:     "from-[#d97706]/10",
    borderHover:   "hover:border-[#d97706]/35",
    accentLine:    "from-[#d97706] to-[#d97706]/20",
    badgeBg:       "bg-[#fef3c7] text-[#b45309]",
    ctaColor:      "text-[#d97706] group-hover:text-[#b45309]",
    arrowColor:    "text-[#d97706]",
  },
  rose: {
    iconBg:        "bg-[#ffe4e6]",
    iconBgHover:   "group-hover:bg-[#fecdd3]",
    iconColor:     "text-[#e11d48]",
    glowColor:     "from-[#e11d48]/10",
    borderHover:   "hover:border-[#e11d48]/35",
    accentLine:    "from-[#e11d48] to-[#e11d48]/20",
    badgeBg:       "bg-[#ffe4e6] text-[#be123c]",
    ctaColor:      "text-[#e11d48] group-hover:text-[#be123c]",
    arrowColor:    "text-[#e11d48]",
  },
  orange: {
    iconBg:        "bg-[#ffedd5]",
    iconBgHover:   "group-hover:bg-[#fed7aa]",
    iconColor:     "text-[#ea580c]",
    glowColor:     "from-[#ea580c]/10",
    borderHover:   "hover:border-[#ea580c]/35",
    accentLine:    "from-[#ea580c] to-[#ea580c]/20",
    badgeBg:       "bg-[#ffedd5] text-[#c2410c]",
    ctaColor:      "text-[#ea580c] group-hover:text-[#c2410c]",
    arrowColor:    "text-[#ea580c]",
  },
};

export const ServiceCard = ({ service, index }) => {
  const { icon, color = "blue", title, question, description, badge, cta, href } = service;
  const palette = colorVariants[color] ?? colorVariants.blue;

  return (
    <Link
      to={href}
      className={clsx(
        // Base layout
        "group relative flex flex-col bg-white overflow-hidden h-full",
        // Border radius — 24px como especificado
        "rounded-3xl",
        // Borde muy sutil
        "border border-slate-200/80",
        palette.borderHover,
        // Sombra elegante
        "shadow-[0_2px_16px_-4px_rgba(0,0,0,0.08),0_1px_4px_-2px_rgba(0,0,0,0.05)]",
        "hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.14),0_8px_20px_-8px_rgba(0,0,0,0.08)]",
        // Elevación
        "hover:-translate-y-2",
        // Transición 300ms
        "transition-all duration-300 ease-out",
        // Animación de entrada escalonada
        "animate-in fade-in slide-in-from-bottom-6 fill-mode-both"
      )}
      style={{ animationDelay: `${index * 90}ms`, animationDuration: "550ms" }}
      aria-label={`Ver detalles sobre ${title}`}
    >
      {/* Resplandor sutil de color en hover */}
      <div
        className={clsx(
          "absolute inset-0 rounded-3xl bg-gradient-to-br to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
          palette.glowColor
        )}
        aria-hidden="true"
      />

      {/* Contenido con mucho padding interno */}
      <div className="relative flex flex-col h-full p-8">

        {/* ── Header: Ícono ── */}
        <div className="mb-6">
          <div
            className={clsx(
              "flex items-center justify-center w-14 h-14 rounded-2xl",
              "transition-all duration-300 ease-out",
              palette.iconBg,
              palette.iconBgHover,
              // Animación del ícono: ligero bounce en hover
              "group-hover:scale-110"
            )}
            aria-hidden="true"
          >
            <Icon
              name={icon}
              size={26}
              strokeWidth={1.75}
              className={clsx("transition-transform duration-300 group-hover:scale-105", palette.iconColor)}
            />
          </div>
        </div>

        {/* ── Body: Título + Pregunta + Descripción ── */}
        <div className="flex-1 flex flex-col gap-3 mb-7">
          <Heading
            level="h3"
            className="text-xl font-bold text-slate-900 leading-snug"
          >
            {title}
          </Heading>

          {/* Pregunta destacada */}
          <p className="text-[15px] font-semibold text-slate-700 leading-snug">
            {question}
          </p>

          <Text
            variant="muted"
            className="text-sm leading-relaxed text-slate-500"
          >
            {description}
          </Text>
        </div>

        {/* ── Footer: Badge + CTA ── */}
        <div className="flex flex-col gap-4 mt-auto">
          {/* Badge de checkmark */}
          <span
            className={clsx(
              "inline-flex items-center self-start px-3 py-1 rounded-full text-[12px] font-semibold tracking-wide",
              palette.badgeBg
            )}
          >
            {badge}
          </span>

          {/* Botón CTA con flecha animada */}
          <div className={clsx("flex items-center gap-2", palette.ctaColor)}>
            <span className="text-sm font-semibold transition-colors duration-300">
              {cta}
            </span>
            <Icon
              name="arrow-right"
              size={15}
              className={clsx(
                "transition-transform duration-300 group-hover:translate-x-1.5",
                palette.arrowColor
              )}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Línea decorativa inferior — crece desde la izquierda en hover */}
      <div
        className={clsx(
          "absolute bottom-0 left-0 h-[3px] bg-gradient-to-r w-0 group-hover:w-full transition-all duration-500 ease-out",
          palette.accentLine
        )}
        aria-hidden="true"
      />
    </Link>
  );
};
