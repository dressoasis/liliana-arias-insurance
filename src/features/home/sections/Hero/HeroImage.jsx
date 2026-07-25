import { HeroFloatingCards } from "./HeroFloatingCards";
import { heroContent } from "../../../../content/home/hero";

export const HeroImage = ({ src, alt }) => {
  return (
    <div
      className="relative w-full h-full flex items-start justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-800 fill-mode-both"
      style={{ animationDelay: "440ms" }}
    >
      {/* Contenedor principal de la fotografía */}
      <div className="relative z-10 w-full max-w-[420px] lg:max-w-none lg:w-[88%]">

        {/* Aura de luz detrás de la foto — premium glow effect */}
        <div
          className="absolute inset-0 rounded-[2rem]"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, rgba(2, 132, 199, 0.12) 0%, transparent 70%)",
            filter: "blur(24px)",
            transform: "scale(1.1)"
          }}
          aria-hidden="true"
        />

        {/* Frame de la fotografía */}
        <div
          className="relative rounded-[2rem] overflow-hidden"
          style={{
            boxShadow: "0 24px 64px -12px rgba(12, 26, 46, 0.18), 0 8px 24px -4px rgba(12, 26, 46, 0.10)",
            border: "1px solid rgba(255, 255, 255, 0.6)"
          }}
        >
          {/* Reflejo superior — efecto premium */}
          <div
            className="absolute top-0 left-0 right-0 h-px z-10"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)"
            }}
            aria-hidden="true"
          />

          {/* Fotografía oficial de Liliana Arias */}
          <img
            src={src}
            alt={alt}
            loading="eager"
            decoding="sync"
            className="w-full transition-transform duration-[1400ms] ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.025]"
            style={{
              // object-position centrado en el rostro — parte superior de la imagen
              objectFit: "cover",
              objectPosition: "center top",
              aspectRatio: "3/4",
              display: "block"
            }}
          />
        </div>
      </div>

      {/* Widgets flotantes — desktop: borde izquierdo de la foto, mobile: debajo */}
      <div
        className="w-full lg:w-auto mt-6 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-[45%] lg:-left-6 xl:-left-12 z-20"
        style={{ animationDelay: "600ms" }}
      >
        <HeroFloatingCards cards={heroContent.floatingCards} />
      </div>
    </div>
  );
};
