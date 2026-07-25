import { clsx } from "clsx";

export const Heading = ({ children, level = "h2", className, ...props }) => {
  const Component = level === "display" ? "h1" : level;
  
  const baseStyles = "font-bold text-text tracking-tight";
  
  const sizes = {
    display: "text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight",
    h1: "text-4xl md:text-5xl lg:text-6xl leading-tight",
    h2: "text-3xl md:text-4xl lg:text-5xl leading-snug",
    h3: "text-2xl md:text-3xl lg:text-4xl leading-snug",
    h4: "text-xl md:text-2xl lg:text-3xl leading-normal",
  };

  return (
    <Component className={clsx(baseStyles, sizes[level], className)} {...props}>
      {children}
    </Component>
  );
};
