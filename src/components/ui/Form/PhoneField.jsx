import { forwardRef } from "react";
import { TextField } from "./TextField";

export const PhoneField = forwardRef((props, ref) => {
  return (
    <TextField 
      ref={ref} 
      type="tel" 
      inputMode="tel"
      autoComplete="tel"
      {...props} 
    />
  );
});

PhoneField.displayName = "PhoneField";
