import { clsx } from "clsx";

export const VisuallyHidden = ({ children, as: Component = "span", className, ...props }) => {
  return (
    <Component 
      className={clsx("sr-only", className)} 
      {...props}
    >
      {children}
    </Component>
  );
};
