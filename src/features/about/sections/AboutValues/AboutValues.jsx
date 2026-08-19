/**
 * AboutValues — Tres tarjetas de propuesta de valor.
 * Confianza · Asesoría personalizada · Asesoría sin costo
 */
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { aboutContent } from "@/content/about/about";

const { values } = aboutContent;

export const AboutValues = () => {
  return (
    <Section
      spacing="base"
      background="surface"
      className="relative overflow-hidden"
      aria-label="Propuesta de valor de Liliana Arias"
    >
      {/* Decorativo muy sutil */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(240,249,255,0.5) 0%, rgba(248,250,252,1) 100%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Header de la sección */}
        <div
          className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-600 fill-mode-both"
          style={{ animationDelay: "0ms" }}
        >
          <Heading
            level="h2"
            className="text-[1.9rem] md:text-[2.4rem] lg:text-[2.8rem] font-extrabold tracking-tight leading-snug text-balance"
            style={{ color: "#0c1a2e" }}
          >
            ¿Por qué trabajar con Liliana?
          </Heading>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <article
              key={item.id}
              className="group flex flex-col gap-5 p-7 rounded-2xl bg-white transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-600 fill-mode-both"
              style={{
                animationDelay: `${80 + i * 80}ms`,
                border: "1px solid rgba(2,132,199,0.10)",
                boxShadow:
                  "0 4px 24px -4px rgba(12,26,46,0.07), 0 1px 4px -1px rgba(12,26,46,0.04)",
              }}
            >
              {/* Icono */}
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 group-hover:scale-105"
                style={{
                  background: "rgba(2,132,199,0.08)",
                  border: "1px solid rgba(2,132,199,0.14)",
                }}
                aria-hidden="true"
              >
                <Icon
                  name={item.icon}
                  size={22}
                  strokeWidth={1.8}
                  className="text-[#0284c7]"
                />
              </div>

              {/* Título */}
              <h3
                className="text-[1.15rem] font-bold tracking-tight"
                style={{ color: "#0c1a2e" }}
              >
                {item.title}
              </h3>

              {/* Descripción */}
              <p
                className="text-[0.95rem] leading-[1.75]"
                style={{ color: "#64748b" }}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};
