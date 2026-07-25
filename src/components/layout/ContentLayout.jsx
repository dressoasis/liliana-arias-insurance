import { clsx } from "clsx";

export const ContentLayout = ({
  children,
  size = "md",
  centered = true,
  className,
  ...props
}) => {
  const sizeMap = {
    sm: "max-w-2xl",
    md: "max-w-3xl",
    lg: "max-w-4xl"
  };

  return (
    <article
      className={clsx(
        "w-full",
        // Tipografía jerárquica en cascada sin necesidad de plugins externos
        "[&>p]:mb-6 [&>p:last-child]:mb-0 [&>p]:leading-relaxed [&>p]:text-muted",
        "[&>h1]:mb-6 [&>h1]:text-4xl [&>h1]:font-extrabold [&>h1]:tracking-tight",
        "[&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:text-3xl [&>h2]:font-bold",
        "[&>h3]:mt-8 [&>h3]:mb-4 [&>h3]:text-2xl [&>h3]:font-semibold",
        "[&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-6 [&>ul>li]:mb-2 [&>ul>li]:text-muted",
        "[&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:mb-6 [&>ol>li]:mb-2 [&>ol>li]:text-muted",
        "[&>img]:rounded-2xl [&>img]:my-10 [&>img]:shadow-md",
        "[&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:my-8 [&>blockquote]:italic",
        sizeMap[size] || sizeMap.md,
        centered && "mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </article>
  );
};
