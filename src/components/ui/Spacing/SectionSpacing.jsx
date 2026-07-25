import { clsx } from "clsx";

export const SectionSpacing = ({ 
  children, 
  size = "lg", 
  top = true,
  bottom = true,
  className, 
  as: Component = "div",
  ...props 
}) => {
  // Patrones responsivos masivos. Crecen automáticamente en pantallas grandes.
  const map = {
    sm: "py-8 md:py-12",
    md: "py-12 md:py-16",
    lg: "py-16 md:py-24",
    xl: "py-24 md:py-32"
  };
  
  const mapTop = {
    sm: "pt-8 md:pt-12",
    md: "pt-12 md:pt-16",
    lg: "pt-16 md:pt-24",
    xl: "pt-24 md:pt-32"
  };

  const mapBottom = {
    sm: "pb-8 md:pb-12",
    md: "pb-12 md:pb-16",
    lg: "pb-16 md:pb-24",
    xl: "pb-24 md:pb-32"
  };

  let paddingClass = "";
  if (top && bottom) paddingClass = map[size] || map.lg;
  else if (top) paddingClass = mapTop[size] || mapTop.lg;
  else if (bottom) paddingClass = mapBottom[size] || mapBottom.lg;

  return (
    <Component className={clsx(paddingClass, className)} {...props}>
      {children}
    </Component>
  );
};
