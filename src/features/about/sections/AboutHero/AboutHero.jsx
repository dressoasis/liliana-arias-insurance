/**
 * AboutHero — Hero elegante y limpio para la página Sobre Liliana.
 * Dos columnas: copy a la izquierda, fotografía a la derecha.
 */
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { aboutContent } from "@/content/about/about";

const { hero } = aboutContent;

export const AboutHero = () => {
  const navigate = useNavigate();

  const handleNav = (href) => {
    if (href.startsWith("http") || href.startsWith("tel:")) {
      window.location.href = href;
    } else {
      navigate(href);
    }
  };

  return (
    <section
      className="relative overflow-hidden"
      aria-label="Sobre Liliana Arias — Agente de seguros autorizado"
    >
      {/* Fondo muy sutil — igual que el Hero del Home */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(175deg, #dbeafe 0%, #eff6ff 30%, #f0f9ff 60%, #ffffff 100%)",
          }}
        />
        <div
          className="absolute"
          style={{
            top: "-20%",
            left: "-10%",
            width: "70%",
            height: "110%",
            background:
              "radial-gradient(ellipse at 40% 40%, rgba(37, 99, 235, 0.18) 0%, rgba(59, 130, 246, 0.09) 40%, transparent 72%)",
          }}
        />
        <div
          className="absolute"
          style={{
            top: "-5%",
            right: "-12%",
            width: "65%",
            height: "95%",
            background:
              "radial-gradient(ellipse at 60% 30%, rgba(14, 165, 233, 0.16) 0%, rgba(56, 189, 248, 0.08) 45%, transparent 70%)",
          }}
        />
        {/* Franja de luz superior */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "3px",
            background:
              "linear-gradient(90deg, rgba(37,99,235,0) 0%, rgba(37,99,235,0.45) 35%, rgba(14,165,233,0.55) 65%, rgba(37,99,235,0) 100%)",
          }}
          aria-hidden="true"
        />
        {/* Fade inferior */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "180px",
            background:
              "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 md:px-8 max-w-7xl pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center min-h-[70vh]">

          {/* Columna izquierda — copy */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6">
            {/* Badge */}
            <Badge
              variant="primary"
              className="px-4 py-1.5 text-[12px] font-bold tracking-widest uppercase shadow-sm shadow-primary/20 animate-in fade-in slide-in-from-bottom-3 duration-600 fill-mode-both"
              style={{ animationDelay: "0ms" }}
            >
              {hero.badge}
            </Badge>

            {/* Título H1 */}
            <Heading
              level="h1"
              className="text-[2.2rem] md:text-[2.8rem] lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.1] text-balance animate-in fade-in slide-in-from-bottom-5 duration-700 fill-mode-both"
              style={{ animationDelay: "80ms", color: "#0c1a2e" }}
            >
              {hero.title}
            </Heading>

            {/* Descripción */}
            <Text
              variant="lead"
              className="max-w-[46ch] text-balance text-[1.05rem] md:text-[1.1rem] leading-[1.75] font-normal animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
              style={{ animationDelay: "160ms", color: "#475569" }}
            >
              {hero.description}
            </Text>

            {/* Botones */}
            <div
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
              style={{ animationDelay: "260ms" }}
            >
              {hero.buttons.map((btn, i) => {
                const isPrimary = btn.variant === "primary";
                return (
                  <Button
                    key={i}
                    variant={btn.variant}
                    size="lg"
                    className={[
                      "w-full sm:w-auto px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all duration-300 ease-out",
                      isPrimary
                        ? [
                            "bg-[#0284c7] text-white border-transparent",
                            "shadow-[0_4px_24px_rgba(2,132,199,0.30)]",
                            "hover:bg-[#0369a1] hover:shadow-[0_8px_32px_rgba(2,132,199,0.42)] hover:-translate-y-0.5",
                            "active:translate-y-0",
                          ].join(" ")
                        : [
                            "border-2 border-[#0284c7]/30 text-[#0284c7] bg-white/60 backdrop-blur-sm",
                            "hover:border-[#0284c7]/60 hover:bg-white hover:-translate-y-0.5",
                            "active:translate-y-0",
                          ].join(" "),
                    ].join(" ")}
                    onClick={() => handleNav(btn.href)}
                  >
                    {btn.label}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Columna derecha — fotografía */}
          <div
            className="w-full flex items-center justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-800 fill-mode-both"
            style={{ animationDelay: "380ms" }}
          >
            <div className="relative w-full max-w-[380px] lg:max-w-[420px]">
              {/* Aura */}
              <div
                className="absolute inset-0 rounded-[2rem]"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 30%, rgba(2, 132, 199, 0.12) 0%, transparent 70%)",
                  filter: "blur(24px)",
                  transform: "scale(1.1)",
                }}
                aria-hidden="true"
              />
              {/* Frame */}
              <div
                className="relative rounded-[2rem] overflow-hidden"
                style={{
                  boxShadow:
                    "0 24px 64px -12px rgba(12, 26, 46, 0.18), 0 8px 24px -4px rgba(12, 26, 46, 0.10)",
                  border: "1px solid rgba(255, 255, 255, 0.6)",
                }}
              >
                <img
                  src={hero.image.src}
                  alt={hero.image.alt}
                  loading="eager"
                  decoding="sync"
                  className="w-full transition-transform duration-[1400ms] ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.025]"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                    aspectRatio: "3/4",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
