import { useState, useEffect } from "react";
import { clsx } from "clsx";

export const Image = ({
  src,
  alt,
  className,
  aspectRatio = "auto", 
  objectFit = "cover", 
  borderRadius = "none", 
  lazy = true,
  fallbackSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23f8fafc'/%3E%3Cpath d='M30 60L45 45L70 70' stroke='%23cbd5e1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3Ccircle cx='65' cy='35' r='6' stroke='%23cbd5e1' stroke-width='2' fill='none'/%3E%3C/svg%3E",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  // Reset state if src changes
  useEffect(() => {
    setCurrentSrc(src);
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    }
  };

  const aspectClasses = {
    auto: "aspect-auto",
    square: "aspect-square",
    video: "aspect-video",
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "3/4": "aspect-[3/4]",
    "5/4": "aspect-[5/4]",
  };

  const fitClasses = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill",
    none: "object-none",
    "scale-down": "object-scale-down",
  };

  const radiusClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
  };

  return (
    <div
      className={clsx(
        "relative overflow-hidden bg-surface flex-shrink-0",
        aspectClasses[aspectRatio] || aspectClasses.auto,
        radiusClasses[borderRadius] || radiusClasses.none,
        className
      )}
    >
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-border/40 animate-pulse" aria-hidden="true" />
      )}

      {/* Main Image element */}
      <img
        src={currentSrc}
        alt={alt}
        loading={lazy ? "lazy" : "eager"}
        decoding={lazy ? "async" : "sync"}
        onLoad={handleLoad}
        onError={handleError}
        className={clsx(
          "w-full h-full transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          fitClasses[objectFit] || fitClasses.cover,
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        {...props}
      />
    </div>
  );
};
