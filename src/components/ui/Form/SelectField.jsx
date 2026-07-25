import { forwardRef } from "react";
import { clsx } from "clsx";
import { FieldGroup } from "./FieldGroup";
import { FieldLabel } from "./FieldLabel";
import { FieldHint } from "./FieldHint";
import { ErrorMessage } from "./ErrorMessage";
import { Icon } from "../Icon";

export const SelectField = forwardRef(({
  label,
  name,
  id,
  error,
  hint,
  required,
  options = [],
  placeholder = "Seleccione una opción",
  className,
  ...props
}, ref) => {
  const inputId = id || name;
  const hintId = `${inputId}-hint`;
  const errorId = `${inputId}-error`;

  return (
    <FieldGroup className={className}>
      <FieldLabel htmlFor={inputId} isRequired={required}>{label}</FieldLabel>
      <div className="relative">
        <select
          ref={ref}
          id={inputId}
          name={name}
          required={required}
          aria-invalid={!!error}
          aria-describedby={clsx(hint && hintId, error && errorId) || undefined}
          className={clsx(
            "w-full px-4 py-2.5 bg-background border rounded-lg text-text text-base transition-colors duration-200 appearance-none",
            "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary",
            error ? "border-accent focus:ring-accent/40 focus:border-accent" : "border-border hover:border-border/80",
            // Ajustamos color si está mostrando el placeholder (value vacio simulado)
            "invalid:text-muted/80"
          )}
          {...props}
        >
          <option value="" disabled hidden>{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-muted">
          <Icon name="chevron-down" className="w-5 h-5" />
        </div>
      </div>
      <FieldHint id={hintId}>{hint}</FieldHint>
      <ErrorMessage id={errorId}>{error}</ErrorMessage>
    </FieldGroup>
  );
});

SelectField.displayName = "SelectField";
