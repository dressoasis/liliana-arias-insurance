import { clsx } from "clsx";

/**
 * CompanyLogo
 * 
 * Renderiza el logo de una aseguradora con los siguientes comportamientos:
 * - Si existe `logoSrc`: muestra la imagen en escala de grises con transición a color en hover.
 * - Si NO existe `logoSrc`: muestra un placeholder tipográfico elegante (initials + name).
 * 
 * Cuando tengas los SVGs oficiales, solo rellena `logoSrc` en companies.js.
 * Este componente no necesita cambios.
 */
export const CompanyLogo = ({ company }) => {
  const { name, logoSrc, initials } = company;

  return (
    <div
      className={clsx(
        // Contenedor uniforme — misma altura visual para todos
        "group flex items-center justify-center h-16 px-6",
        "rounded-xl border border-transparent",
        // Opacidad reducida en reposo, total en hover
        "opacity-40 hover:opacity-100",
        // Escala de grises → color en hover
        "grayscale hover:grayscale-0",
        // Ligero scale en hover
        "hover:scale-105",
        // Hover: fondo y borde sutil para delimitar el área clicable
        "hover:bg-surface hover:border-border/50 hover:shadow-sm",
        // Transición fluida para todas las propiedades
        "transition-all duration-300 ease-out",
        "cursor-default select-none"
      )}
      title={name}
      role="img"
      aria-label={`Logo de ${name}`}
    >
      {logoSrc ? (
        /* Imagen real del logo */
        <img
          src={logoSrc}
          alt={name}
          className="h-8 w-auto object-contain"
          loading="lazy"
          decoding="async"
        />
      ) : (
        /* Placeholder tipográfico elegante hasta tener el logo oficial */
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-xs font-bold tracking-widest text-muted uppercase leading-none">
            {initials}
          </span>
          <span className="text-[13px] font-semibold text-text leading-tight whitespace-nowrap">
            {name}
          </span>
        </div>
      )}
    </div>
  );
};
