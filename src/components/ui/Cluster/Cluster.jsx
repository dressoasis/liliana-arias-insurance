import { clsx } from "clsx";

export const Cluster = ({ 
  children, 
  gap = "4", 
  align = "center", 
  justify = "start", 
  className, 
  ...props 
}) => {
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
  };

  return (
    <div 
      className={clsx(
        "flex flex-wrap",
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
