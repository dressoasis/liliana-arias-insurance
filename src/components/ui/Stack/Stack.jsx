import { clsx } from "clsx";

export const Stack = ({ 
  children, 
  direction = "col", 
  gap = "4", 
  align = "stretch", 
  justify = "start", 
  className, 
  ...props 
}) => {
  const directions = {
    col: "flex-col",
    row: "flex-row",
    "col-reverse": "flex-col-reverse",
    "row-reverse": "flex-row-reverse",
    "col-md-row": "flex-col md:flex-row",
  };

  const aligns = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  };

  const justifies = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
  };
  
  const gaps = {
    0: "gap-0",
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    6: "gap-6",
    8: "gap-8",
    12: "gap-12",
  };

  return (
    <div 
      className={clsx(
        "flex", 
        directions[direction],
        aligns[align],
        justifies[justify],
        gaps[gap],
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
};
