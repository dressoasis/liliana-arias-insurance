import { clsx } from "clsx";

export const FieldGroup = ({ children, className, ...props }) => {
  return (
    <div className={clsx("flex flex-col space-y-1.5 w-full", className)} {...props}>
      {children}
    </div>
  );
};
