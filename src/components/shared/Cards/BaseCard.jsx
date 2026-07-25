import { clsx } from "clsx";
import { Card } from "../../ui/Card";
import { Icon } from "../../ui/Icon";

/**
 * BaseCard
 * Esqueleto estructural principal.
 * Maneja el padding, áreas de renderizado (header, body, footer) y animación básica.
 */
export const BaseCard = ({
  header,
  footer,
  icon,
  actions,
  variant = "default",
  hover = false,
  spacing = "md",
  className,
  children,
  onClick,
  as,
  to,
  href,
  ...props
}) => {
  const spacings = {
    sm: "p-4 sm:p-5",
    md: "p-6 sm:p-8",
    lg: "p-8 sm:p-10",
    none: "p-0",
  };

  const isInteractive = hover || !!onClick;
  
  // Forzamos la variante interactiva de la UI base si se requiere
  const cardVariant = isInteractive && variant === "default" ? "interactive" : variant;

  // Si pasa 'to', probablemente quiera usar Link de react-router-dom, pero BaseCard
  // no debería acoplarse. El consumidor debe pasar as={Link} to={href}.
  // Aquí solo pasamos 'as' u omitimos.
  return (
    <Card 
      as={as}
      to={to}
      href={href}
      variant={cardVariant} 
      className={clsx(
        "flex flex-col h-full group relative overflow-hidden transition-all duration-300 ease-out", 
        className
      )} 
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...props}
    >
      {/* Opcional: Preparación para efecto de brillo en Hover con Framer Motion en el futuro */}
      {isInteractive && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
      )}

      <div className={clsx("flex flex-col flex-1 relative z-10", spacings[spacing])}>
        {/* Header Area */}
        {(icon || header) && (
          <div className="mb-5 flex flex-col items-start gap-4">
            {icon && (
              <div className="p-3 rounded-xl bg-surface text-muted transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary shrink-0">
                <Icon name={icon} className="w-6 h-6" />
              </div>
            )}
            {header && <div className="w-full">{header}</div>}
          </div>
        )}

        {/* Body Area */}
        <div className="flex-1 flex flex-col justify-start">
          {children}
        </div>

        {/* Footer Area */}
        {(footer || actions) && (
          <div className={clsx(
            "mt-8 pt-5 border-t transition-colors duration-300 flex items-center justify-between",
            isInteractive ? "border-border/60 group-hover:border-border" : "border-border/50"
          )}>
            {footer && <div className="flex-1">{footer}</div>}
            {actions && <div className="flex items-center gap-2 shrink-0">{actions}</div>}
          </div>
        )}
      </div>
    </Card>
  );
};
