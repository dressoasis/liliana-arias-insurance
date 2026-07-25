import { forwardRef } from "react";
import { clsx } from "clsx";
import { FieldHint } from "./FieldHint";
import { ErrorMessage } from "./ErrorMessage";

export const RadioField = forwardRef(({
  label,
  name,
  id,
  value,
  error,
  hint,
  required,
  className,
  ...props
}, ref) => {
  const inputId = id || `${name}-${value}`;
  const hintId = `${inputId}-hint`;
  const errorId = `${inputId}-error`;

  return (
    <div className={clsx("flex flex-col space-y-1 w-full", className)}>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            ref={ref}
            id={inputId}
            name={name}
            type="radio"
            value={value}
            required={required}
            aria-invalid={!!error}
            aria-describedby={clsx(hint && hintId, error && errorId) || undefined}
            className="w-4 h-4 text-primary bg-background border-border focus:ring-primary focus:ring-2 focus:ring-offset-1 focus:ring-offset-background transition-colors cursor-pointer"
            {...props}
          />
        </div>
        <div className="ml-3 text-sm">
          {label && (
            <label htmlFor={inputId} className="font-medium text-text cursor-pointer">
              {label} {required && <span className="text-accent ml-0.5" aria-hidden="true">*</span>}
            </label>
          )}
          <FieldHint id={hintId} className="mt-0.5">{hint}</FieldHint>
        </div>
      </div>
      <ErrorMessage id={errorId}>{error}</ErrorMessage>
    </div>
  );
});

RadioField.displayName = "RadioField";
