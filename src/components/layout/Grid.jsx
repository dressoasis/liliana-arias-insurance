import { clsx } from "clsx";

export const Grid = ({ 
  children, 
  cols = 1, 
  gap = "md", 
  align, 
  justify, 
  className,
  as: Component = "div",
  ...props 
}) => {
  const gapMap = {
    none: "gap-0",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12"
  };

  const colsMap = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
  };

  const alignMap = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch"
  };

  const justifyMap = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between"
  };

  return (
    <Component 
      className={clsx(
        "grid w-full", 
        colsMap[cols] || colsMap[1], 
        gapMap[gap] || gapMap.md,
        align && alignMap[align],
        justify && justifyMap[justify],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
