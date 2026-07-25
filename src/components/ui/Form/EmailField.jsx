import { forwardRef } from "react";
import { TextField } from "./TextField";

export const EmailField = forwardRef((props, ref) => {
  return (
    <TextField 
      ref={ref} 
      type="email" 
      inputMode="email"
      autoComplete="email"
      {...props} 
    />
  );
});

EmailField.displayName = "EmailField";
