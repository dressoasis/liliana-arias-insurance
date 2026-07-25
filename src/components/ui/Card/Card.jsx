import { clsx } from "clsx";

export const Card = ({ children, variant = "default", className, as: Component = "div", ...props }) => {
  const baseStyles = "rounded-xl overflow-hidden bg-background";
  
  const variants = {
    default: "border border-border",
    outlined: "border-2 border-border",
    interactive: "border border-border hover:border-primary cursor-pointer hover:shadow-md transition-all duration-300",
    elevated: "shadow-md hover:shadow-lg transition-shadow duration-300 border border-border/50",
  };

  return (
    <Component className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </Component>
  );
};
