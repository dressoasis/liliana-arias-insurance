/**
 * AboutProcess — Tres pasos del proceso de asesoría.
 * Conversemos → Conoce tus opciones → Toma tu decisión
 */
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { aboutContent } from "@/content/about/about";

const { process } = aboutContent;

export const AboutProcess = () => {
  return (
    <Section
      spacing="base"
      background="surface"
      className="relative overflow-hidden"
      aria-label="Proceso de asesoría"
    >
      {/* Decorativo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(240,249,255,0.4) 0%, rgba(248,250,252,1) 100%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div
          className="text-center mb-14 animate-in fade-in slide-in-from-bottom-4 duration-600 fill-mode-both"
          style={{ animationDelay: "0ms" }}
        >
          <Heading
            level="h2"
            className="text-[1.9rem] md:text-[2.4rem] lg:text-[2.8rem] font-extrabold tracking-tight text-balance"
            style={{ color: "#0c1a2e" }}
          >
            ¿Cómo funciona?
          </Heading>
          <p
            className="mt-4 text-[1.05rem] max-w-[44ch] mx-auto leading-[1.75]"
            style={{ color: "#64748b" }}
          >
            Un proceso claro y sencillo para ayudarte a encontrar la cobertura que mejor se adapta a ti.
          </p>
        </div>

        {/* Pasos */}
        <div className="relative">
          {/* Línea conectora — solo desktop */}
          <div
            className="hidden lg:block absolute top-[2.2rem] left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(2,132,199,0.15), rgba(2,132,199,0.35), rgba(2,132,199,0.15))",
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {process.map((step, i) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center gap-5 animate-in fade-in slide-in-from-bottom-5 duration-700 fill-mode-both"
                style={{ animationDelay: `${80 + i * 120}ms` }}
              >
                {/* Número del paso */}
                <div className="relative flex-shrink-0">
                  {/* Anillo exterior sutil */}
                  <div
                    className="absolute inset-0 rounded-full scale-[1.35] opacity-20"
                    style={{ background: "rgba(2,132,199,0.25)" }}
                    aria-hidden="true"
                  />
                  <div
                    className="relative w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)",
                      boxShadow:
                        "0 8px 24px rgba(2,132,199,0.30), 0 2px 8px rgba(2,132,199,0.20)",
                    }}
                  >
                    <span
                      className="text-[1.15rem] font-black tracking-tight text-white"
                      aria-hidden="true"
                    >
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Título del paso */}
                <h3
                  className="text-[1.15rem] font-bold tracking-tight"
                  style={{ color: "#0c1a2e" }}
                >
                  {step.title}
                </h3>

                {/* Descripción */}
                <p
                  className="text-[0.95rem] leading-[1.8] max-w-[28ch] mx-auto"
                  style={{ color: "#64748b" }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
