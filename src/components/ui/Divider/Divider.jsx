import { clsx } from "clsx";

export const Divider = ({ orientation = "horizontal", className, ...props }) => {
  const baseStyles = "bg-border";
  
  const orientations = {
    horizontal: "h-px w-full",
    vertical: "w-px h-full min-h-[1em] inline-block align-middle",
  };

  return (
    <div 
      role="separator" 
      className={clsx(baseStyles, orientations[orientation], className)} 
      {...props} 
    />
  );
};
