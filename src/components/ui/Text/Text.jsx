import { clsx } from "clsx";

export const Text = ({ children, variant = "body", className, as = "p", ...props }) => {
  const Component = as;

  const baseStyles = "text-text";

  const variants = {
    body: "text-base leading-relaxed",
    lead: "text-lg md:text-xl leading-relaxed text-muted",
    small: "text-sm leading-normal",
    muted: "text-base leading-relaxed text-muted",
    caption: "text-xs leading-normal text-muted",
  };

  return (
    <Component className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </Component>
  );
};
