import { clsx } from "clsx";

export const ErrorMessage = ({ children, id, className, ...props }) => {
  if (!children) return null;
  return (
    <p 
      id={id} 
      role="alert" 
      aria-live="polite"
      className={clsx("text-sm font-medium text-accent mt-1", className)} 
      {...props}
    >
      {children}
    </p>
  );
};
