import { clsx } from "clsx";

export const FieldHint = ({ children, id, className, ...props }) => {
  if (!children) return null;
  return (
    <p id={id} className={clsx("text-sm text-muted", className)} {...props}>
      {children}
    </p>
  );
};
