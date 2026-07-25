import { clsx } from "clsx";

export const Spacer = ({ className, ...props }) => {
  return (
    <div 
      aria-hidden="true" 
      className={clsx("flex-1 self-stretch", className)} 
      {...props} 
    />
  );
};
