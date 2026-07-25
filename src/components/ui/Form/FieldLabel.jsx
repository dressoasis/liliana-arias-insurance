import { clsx } from "clsx";

export const FieldLabel = ({ children, htmlFor, isRequired, className, ...props }) => {
  if (!children) return null;
  return (
    <label 
      htmlFor={htmlFor} 
      className={clsx("block text-sm font-semibold text-text", className)}
      {...props}
    >
      {children}
      {isRequired && <span className="text-accent ml-1" aria-hidden="true">*</span>}
    </label>
  );
};
