import { clsx } from "clsx";

/**
 * Container — Implementación oficial única.
 * Fuente canónica: src/components/ui/Container/Container.jsx
 *
 * Soporta `size` para control de max-width y `as` para polimorfismo semántico.
 * La versión de Spacing/Container.jsx re-exporta desde aquí.
 */
export const Container = ({
  children,
  size = "lg",
  className,
  as: Component = "div",
  ...props
}) => {
  const maxWMap = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-[96rem]",
    full: "max-w-full",
  };

  return (
    <Component
      className={clsx(
        "w-full mx-auto px-5 sm:px-8",
        maxWMap[size] || maxWMap.lg,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
