import { clsx } from "clsx";

export const SkipToContent = ({ contentId = "main-content", children = "Saltar al contenido principal" }) => {
  return (
    <a
      href={`#${contentId}`}
      className={clsx(
        "fixed top-0 left-0 z-[9999]",
        "px-4 py-3 bg-primary text-text font-bold rounded-br-lg shadow-xl",
        "-translate-y-full focus:translate-y-0 transition-transform duration-200 ease-out",
        "focus:outline-none focus:ring-4 focus:ring-accent"
      )}
    >
      {children}
    </a>
  );
};
