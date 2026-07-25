import { clsx } from "clsx";

export const Section = ({ 
  children, 
  background = "transparent", 
  spacing = "base", 
  className, 
  ...props 
}) => {
  const spacingStyles = {
    none: "py-0",
    sm: "py-6 md:py-8 lg:py-12",
    base: "py-12 md:py-16 lg:py-20",
    lg: "py-16 md:py-24 lg:py-32",
  };

  const backgroundStyles = {
    transparent: "bg-transparent",
    background: "bg-background",
    surface: "bg-surface",
    primary: "bg-primary text-white",
  };

  return (
    <section 
      className={clsx(spacingStyles[spacing], backgroundStyles[background], className)} 
      {...props}
    >
      {children}
    </section>
  );
};
