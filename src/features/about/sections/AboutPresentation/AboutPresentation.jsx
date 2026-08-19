/**
 * AboutPresentation — Sección de dos columnas: foto a la izquierda, texto a la derecha.
 */
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { aboutContent } from "@/content/about/about";

const { presentation } = aboutContent;

export const AboutPresentation = () => {
  return (
    <Section
      spacing="base"
      background="background"
      className="relative overflow-hidden"
      aria-label="Presentación de Liliana Arias"
    >
      {/* Decorativo muy sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(14,165,233,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">

          {/* Columna izquierda — fotografía */}
          <div
            className="flex justify-center lg:justify-start animate-in fade-in slide-in-from-left-6 duration-700 fill-mode-both"
            style={{ animationDelay: "100ms" }}
          >
            <div className="relative w-full max-w-[400px]">
              {/* Decorativo detrás de la foto */}
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-[2rem]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(2,132,199,0.08) 0%, rgba(56,189,248,0.05) 100%)",
                  border: "1px solid rgba(2,132,199,0.10)",
                }}
                aria-hidden="true"
              />
              {/* Frame foto */}
              <div
                className="relative rounded-[2rem] overflow-hidden"
                style={{
                  boxShadow:
                    "0 16px 48px -8px rgba(12, 26, 46, 0.14), 0 4px 16px -2px rgba(12, 26, 46, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.7)",
                }}
              >
                <img
                  src={presentation.image.src}
                  alt={presentation.image.alt}
                  loading="lazy"
                  className="w-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.03]"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                    aspectRatio: "4/5",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Columna derecha — texto */}
          <div
            className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-6 duration-700 fill-mode-both"
            style={{ animationDelay: "200ms" }}
          >
            {/* Línea de acento */}
            <div
              className="w-12 h-1 rounded-full"
              style={{ background: "linear-gradient(90deg, #0284c7, #38bdf8)" }}
              aria-hidden="true"
            />

            <Heading
              level="h2"
              className="text-[1.9rem] md:text-[2.4rem] lg:text-[2.8rem] font-extrabold tracking-tight leading-[1.15] text-balance"
              style={{ color: "#0c1a2e" }}
            >
              {presentation.title}
            </Heading>

            <div className="flex flex-col gap-4">
              {presentation.paragraphs.map((para, i) => (
                <Text
                  key={i}
                  variant="body"
                  className="text-[1.05rem] leading-[1.8]"
                  style={{ color: "#475569" }}
                >
                  {para}
                </Text>
              ))}
            </div>

            {/* Chip indicador */}
            <div className="mt-2 flex items-center gap-3">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold"
                style={{
                  background: "rgba(2,132,199,0.07)",
                  border: "1px solid rgba(2,132,199,0.15)",
                  color: "#0369a1",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#0284c7" }}
                  aria-hidden="true"
                />
                Agente de Seguros Autorizado
              </span>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};
