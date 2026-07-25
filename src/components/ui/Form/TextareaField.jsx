import { forwardRef } from "react";
import { clsx } from "clsx";
import { FieldGroup } from "./FieldGroup";
import { FieldLabel } from "./FieldLabel";
import { FieldHint } from "./FieldHint";
import { ErrorMessage } from "./ErrorMessage";

export const TextareaField = forwardRef(({
  label,
  name,
  id,
  error,
  hint,
  required,
  rows = 4,
  className,
  ...props
}, ref) => {
  const inputId = id || name;
  const hintId = `${inputId}-hint`;
  const errorId = `${inputId}-error`;

  return (
    <FieldGroup className={className}>
      <FieldLabel htmlFor={inputId} isRequired={required}>{label}</FieldLabel>
      <textarea
        ref={ref}
        id={inputId}
        name={name}
        rows={rows}
        required={required}
        aria-invalid={!!error}
        aria-describedby={clsx(hint && hintId, error && errorId) || undefined}
        className={clsx(
          "w-full px-4 py-3 bg-background border rounded-lg text-text text-base transition-colors duration-200 resize-y",
          "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary placeholder:text-muted/50",
          error ? "border-accent focus:ring-accent/40 focus:border-accent" : "border-border hover:border-border/80"
        )}
        {...props}
      />
      <FieldHint id={hintId}>{hint}</FieldHint>
      <ErrorMessage id={errorId}>{error}</ErrorMessage>
    </FieldGroup>
  );
});

TextareaField.displayName = "TextareaField";
