import { clsx } from "clsx";

export const SidebarLayout = ({
  sidebar,
  children,
  sidebarPosition = "left", 
  sidebarWidth = "w-64", // Standard w-64, w-72, w-80
  gap = "lg",
  stickySidebar = true,
  className,
  ...props
}) => {
  const gapMap = {
    md: "gap-6",
    lg: "gap-8 lg:gap-12",
    xl: "gap-12 lg:gap-16"
  };

  return (
    <div 
      className={clsx(
        "flex flex-col lg:flex-row items-start w-full", 
        gapMap[gap] || gapMap.lg,
        sidebarPosition === "right" && "lg:flex-row-reverse",
        className
      )}
      {...props}
    >
      {/* Sidebar Area */}
      <aside className={clsx(
        "w-full lg:shrink-0", 
        sidebarWidth,
        stickySidebar && "lg:sticky lg:top-24" // Mantiene el sidebar visible al scrollear
      )}>
        {sidebar}
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 w-full">
        {children}
      </main>
    </div>
  );
};
