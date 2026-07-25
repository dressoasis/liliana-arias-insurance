import { clsx } from "clsx";

export const SplitLayout = ({
  left,
  right,
  reverseMobile = false,
  align = "center",
  gap = "xl",
  className,
  ...props
}) => {
  const gapMap = {
    lg: "gap-8 lg:gap-12",
    xl: "gap-12 lg:gap-16",
    "2xl": "gap-16 lg:gap-24"
  };

  const alignMap = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch"
  };

  return (
    <div 
      className={clsx(
        "grid grid-cols-1 lg:grid-cols-2 w-full",
        gapMap[gap] || gapMap.xl,
        alignMap[align] || alignMap.center,
        className
      )}
      {...props}
    >
      <div className={clsx("w-full flex flex-col justify-center", reverseMobile && "order-2 lg:order-1")}>
        {left}
      </div>
      <div className={clsx("w-full flex flex-col justify-center", reverseMobile && "order-1 lg:order-2")}>
        {right}
      </div>
    </div>
  );
};
