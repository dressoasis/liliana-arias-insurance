import { forwardRef } from "react";
import { clsx } from "clsx";
import { Icon } from "../Icon";

export const Button = forwardRef(({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  className,
  ...props
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover focus:ring-primary shadow-sm",
    secondary: "bg-secondary text-white hover:bg-secondary-hover focus:ring-secondary shadow-sm",
    outline: "border-2 border-border text-text hover:border-primary hover:text-primary focus:ring-primary",
    ghost: "text-text hover:bg-surface focus:ring-primary"
  };

  const sizes = {
    sm: "text-sm px-3 py-1.5 gap-1.5",
    md: "text-base px-4 py-2 gap-2",
    lg: "text-lg px-6 py-3 gap-2.5"
  };

  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {loading && <Icon name="loader" className="w-4 h-4 animate-spin" />}
      {!loading && iconLeft && <span className="shrink-0">{iconLeft}</span>}
      {children}
      {!loading && iconRight && <span className="shrink-0">{iconRight}</span>}
    </button>
  );
});

Button.displayName = "Button";