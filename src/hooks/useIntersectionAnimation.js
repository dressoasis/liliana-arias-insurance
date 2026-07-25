import { useEffect, useRef, useState } from "react";

/**
 * useIntersectionAnimation
 *
 * Hook reutilizable que observa cuando un elemento entra en el viewport
 * y activa una bandera `isVisible` para disparar animaciones CSS.
 *
 * @param {Object} options
 * @param {number} options.threshold - Fracción del elemento visible para disparar (0–1). Default: 0.15
 * @param {string} options.rootMargin - Margen del observer. Default: "0px"
 * @param {boolean} options.once - Si es true, deja de observar después de la primera activación. Default: true
 */
export const useIntersectionAnimation = ({
  threshold = 0.15,
  rootMargin = "0px",
  once = true,
} = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
};
