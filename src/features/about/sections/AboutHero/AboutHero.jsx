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
import { useConsultationModal } from "@/context/ConsultationModalContext";

const { hero } = aboutContent;

export const AboutHero = () => {
  const navigate = useNavigate();
  const { openConsultationModal } = useConsultationModal();

  const handleNav = (btn) => {
    if (btn.external || btn.href.startsWith("http") || btn.href.startsWith("tel:")) {
      window.location.href = btn.href;
    } else if (btn.href === "/quote" || btn.href === "/contact" || btn.label.toLowerCase().includes("asesoría")) {
      openConsultationModal();
    } else {
      navigate(btn.href);
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

      {/* Contenido principal centrado sin fotografía */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 md:px-8 max-w-5xl pt-28 md:pt-36 pb-12 md:pb-24 flex flex-col items-center justify-center min-h-[55vh] md:min-h-[65vh]">
        
        <div className="flex flex-col items-center text-center gap-7 w-full">
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
            className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold tracking-tight leading-[1.1] text-balance animate-in fade-in slide-in-from-bottom-5 duration-700 fill-mode-both"
            style={{ animationDelay: "80ms", color: "#0c1a2e" }}
          >
            {hero.title}
          </Heading>

          {/* Descripción */}
          <Text
            variant="lead"
            className="max-w-[54ch] text-balance text-[1.1rem] md:text-[1.25rem] leading-[1.75] font-normal animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
            style={{ animationDelay: "160ms", color: "#475569" }}
          >
            {hero.description}
          </Text>

          {/* Botones */}
          <div
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 w-full mt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
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
                  onClick={() => handleNav(btn)}
                >
                  {btn.label}
                </Button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
