/**
 * AboutCTA — Sección de llamada a la acción con degradado azul muy sutil.
 * Teléfono oficial: (210) 929-3721
 */
import { useNavigate } from "react-router-dom";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { aboutContent } from "@/content/about/about";
import { useConsultationModal } from "@/context/ConsultationModalContext";

const { cta } = aboutContent;

export const AboutCTA = () => {
  const navigate = useNavigate();
  const { openConsultationModal } = useConsultationModal();

  const handleNav = (btn) => {
    if (btn.external || btn.href.startsWith("http") || btn.href.startsWith("tel:")) {
      window.open(btn.href, "_blank", "noopener,noreferrer");
    } else if (btn.href === "/quote" || btn.href === "/contact" || btn.label.toLowerCase().includes("asesoría")) {
      openConsultationModal();
    } else {
      navigate(btn.href);
    }
  };

  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      aria-label="Solicitar asesoría con Liliana Arias"
    >
      {/* Fondo — degradado azul muy sutil, igual al Hero */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(175deg, #dbeafe 0%, #eff6ff 35%, #f0f9ff 65%, #ffffff 100%)",
          }}
        />
        <div
          className="absolute"
          style={{
            top: "-30%",
            left: "-15%",
            width: "80%",
            height: "160%",
            background:
              "radial-gradient(ellipse at 40% 50%, rgba(37,99,235,0.14) 0%, rgba(59,130,246,0.07) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute"
          style={{
            top: "-10%",
            right: "-15%",
            width: "65%",
            height: "120%",
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(14,165,233,0.12) 0%, rgba(56,189,248,0.06) 45%, transparent 68%)",
          }}
        />
        {/* Franja superior */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "3px",
            background:
              "linear-gradient(90deg, rgba(37,99,235,0) 0%, rgba(37,99,235,0.40) 35%, rgba(14,165,233,0.50) 65%, rgba(37,99,235,0) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 md:px-8 max-w-4xl text-center">
        {/* Chip decorativo */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 animate-in fade-in slide-in-from-bottom-3 duration-600 fill-mode-both"
          style={{
            animationDelay: "0ms",
            background: "rgba(2,132,199,0.08)",
            border: "1px solid rgba(2,132,199,0.15)",
          }}
          aria-hidden="true"
        >
          <Icon name="phone" size={13} strokeWidth={2.2} className="text-[#0284c7]" />
          <span className="text-[12px] font-bold tracking-wider uppercase text-[#0369a1]">
            {cta.phone}
          </span>
        </div>

        {/* Título */}
        <Heading
          level="h2"
          className="text-[1.9rem] md:text-[2.6rem] lg:text-[3.2rem] font-extrabold tracking-tight leading-[1.1] text-balance mb-5 animate-in fade-in slide-in-from-bottom-5 duration-700 fill-mode-both"
          style={{ animationDelay: "80ms", color: "#0c1a2e" }}
        >
          {cta.title}
        </Heading>

        {/* Descripción */}
        <Text
          variant="lead"
          className="text-[1.05rem] md:text-[1.15rem] leading-[1.75] max-w-[44ch] mx-auto text-balance mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
          style={{ animationDelay: "160ms", color: "#475569" }}
        >
          {cta.description}
        </Text>

        {/* Botones */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
          style={{ animationDelay: "240ms" }}
        >
          {cta.buttons.map((btn, i) => {
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
                {!isPrimary && (
                  <Icon
                    name="message-square"
                    size={16}
                    strokeWidth={2}
                    className="inline-block mr-2 -mt-0.5"
                    aria-hidden="true"
                  />
                )}
                {btn.label}
              </Button>
            );
          })}
        </div>

        {/* Email de contacto */}
        <p
          className="mt-8 text-[13px] animate-in fade-in duration-700 fill-mode-both"
          style={{ animationDelay: "340ms", color: "#94a3b8" }}
        >
          También puedes escribir a{" "}
          <a
            href={`mailto:${cta.email}`}
            className="font-semibold underline underline-offset-2 transition-colors duration-200 hover:text-[#0284c7]"
            style={{ color: "#64748b" }}
          >
            {cta.email}
          </a>
        </p>
      </div>
    </section>
  );
};
