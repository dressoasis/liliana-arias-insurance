import { clsx } from "clsx";

export const Columns = ({
  children,
  count = 2,
  gap = "md",
  className,
  as: Component = "div",
  ...props
}) => {
  const countMap = {
    1: "columns-1",
    2: "columns-1 md:columns-2",
    3: "columns-1 sm:columns-2 lg:columns-3",
    4: "columns-1 sm:columns-2 lg:columns-4",
  };

  const gapMap = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12"
  };

  return (
    <Component
      className={clsx(
        "w-full",
        "[&>div]:mb-6 [&>div]:break-inside-avoid", // Previene que los hijos se partan entre columnas
        countMap[count] || countMap[2],
        gapMap[gap] || gapMap.md,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
