import { clsx } from "clsx";

export const Flex = ({
  children,
  direction = "row",
  wrap = false,
  gap = "md",
  align = "center",
  justify = "start",
  className,
  as: Component = "div",
  ...props
}) => {
  const directionMap = {
    row: "flex-row",
    col: "flex-col",
    "row-reverse": "flex-row-reverse",
    "col-reverse": "flex-col-reverse"
  };

  const gapMap = {
    none: "gap-0",
    xs: "gap-2",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12"
  };

  const alignMap = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline"
  };

  const justifyMap = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly"
  };

  return (
    <Component
      className={clsx(
        "flex",
        directionMap[direction],
        wrap ? "flex-wrap" : "flex-nowrap",
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
