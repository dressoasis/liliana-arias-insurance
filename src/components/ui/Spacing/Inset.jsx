import { clsx } from "clsx";

/**
 * Inset - Utilidad para padding interno
 * 
 * NOTA ARQUITECTÓNICA (TAILWIND v4):
 * En Tailwind v3, generar clases dinámicamente (`${prefix}-${map[size]}`) podía
 * ser peligroso para el tree-shaking si el string no estaba completo en el código.
 * Tailwind v4 utiliza Custom Properties y su motor es más inteligente, pero 
 * es importante asegurar que estas clases ("p-4", "px-6", etc.) existan en el DOM 
 * o usar variables seguras si se observan problemas de purgado.
 */
export const Inset = ({ 
  children, 
  p, px, py, pt, pb, pl, pr,
  className,
  as: Component = "div",
  ...props 
}) => {
  // Función para mapear un tamaño lógico del sistema a las clases de utilidad
  const getPaddingClass = (prefix, size) => {
    if (!size) return "";
    const map = {
      none: "0", xxs: "1", xs: "2", sm: "3", md: "4", 
      lg: "6", xl: "8", "2xl": "12", "3xl": "16", "4xl": "24", "5xl": "32"
    };
    return `${prefix}-${map[size] || "4"}`;
  };

  return (
    <Component 
      className={clsx(
        p && getPaddingClass("p", p),
        px && getPaddingClass("px", px),
        py && getPaddingClass("py", py),
        pt && getPaddingClass("pt", pt),
        pb && getPaddingClass("pb", pb),
        pl && getPaddingClass("pl", pl),
        pr && getPaddingClass("pr", pr),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
