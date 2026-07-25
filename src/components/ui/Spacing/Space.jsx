import { clsx } from "clsx";

export const Space = ({ 
  size = "md", 
  horizontal = false, 
  className,
  ...props 
}) => {
  // Mapeamos los tokens de spacing a dimensiones de Tailwind
  const verticalMap = {
    none: "h-0", xxs: "h-1", xs: "h-2", sm: "h-3", md: "h-4", 
    lg: "h-6", xl: "h-8", "2xl": "h-12", "3xl": "h-16", "4xl": "h-24", "5xl": "h-32"
  };

  const horizontalMap = {
    none: "w-0", xxs: "w-1", xs: "w-2", sm: "w-3", md: "w-4", 
    lg: "w-6", xl: "w-8", "2xl": "w-12", "3xl": "w-16", "4xl": "w-24", "5xl": "w-32"
  };

  const map = horizontal ? horizontalMap : verticalMap;

  return (
    <div 
      aria-hidden="true" 
      className={clsx(map[size] || map.md, "shrink-0", className)} 
      {...props} 
    />
  );
};
