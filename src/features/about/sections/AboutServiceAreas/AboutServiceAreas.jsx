/**
 * AboutServiceAreas — Cuatro áreas de servicio principales.
 * Medicare · Marketplace · Seguro de Vida · Dental & Vision
 */
import { useNavigate } from "react-router-dom";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Icon } from "@/components/ui/Icon";
import { aboutContent } from "@/content/about/about";

const { serviceAreas } = aboutContent;

export const AboutServiceAreas = () => {
  const navigate = useNavigate();

  return (
    <Section
      spacing="base"
      background="background"
      aria-label="Áreas de servicio"
    >
      <Container>
        {/* Header */}
        <div
          className="text-center mb-4 animate-in fade-in slide-in-from-bottom-4 duration-600 fill-mode-both"
          style={{ animationDelay: "0ms" }}
        >
          <Heading
            level="h2"
            className="text-[1.9rem] md:text-[2.4rem] lg:text-[2.8rem] font-extrabold tracking-tight text-balance"
            style={{ color: "#0c1a2e" }}
          >
            {serviceAreas.title}
          </Heading>
        </div>

        <div
          className="text-center mb-12 animate-in fade-in slide-in-from-bottom-3 duration-600 fill-mode-both"
          style={{ animationDelay: "60ms" }}
        >
          <Text
            variant="lead"
            className="text-[1.05rem] max-w-[42ch] mx-auto"
            style={{ color: "#64748b" }}
          >
            {serviceAreas.intro}
          </Text>
        </div>

        {/* Grid de áreas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {serviceAreas.items.map((item, i) => (
            <button
              key={item.id}
              onClick={() => navigate(item.href)}
              className="group flex flex-col items-center gap-4 p-7 rounded-2xl bg-white text-center transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#0284c7]/40 focus:ring-offset-2 animate-in fade-in slide-in-from-bottom-4 duration-600 fill-mode-both"
              style={{
                animationDelay: `${80 + i * 60}ms`,
                border: "1px solid rgba(2,132,199,0.10)",
                boxShadow:
                  "0 4px 20px -4px rgba(12,26,46,0.06), 0 1px 4px -1px rgba(12,26,46,0.04)",
                cursor: "pointer",
              }}
              aria-label={`Ver información sobre ${item.label}`}
            >
              {/* Icono */}
              <div
                className="flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_16px_rgba(2,132,199,0.20)]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(2,132,199,0.10) 0%, rgba(56,189,248,0.08) 100%)",
                  border: "1px solid rgba(2,132,199,0.14)",
                }}
                aria-hidden="true"
              >
                <Icon
                  name={item.icon}
                  size={26}
                  strokeWidth={1.7}
                  className="text-[#0284c7] transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Label */}
              <span
                className="text-[1rem] font-bold tracking-tight leading-tight"
                style={{ color: "#1e3a5f" }}
              >
                {item.label}
              </span>

              {/* Indicador de navegación */}
              <span
                className="text-[12px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1"
                style={{ color: "#0284c7" }}
                aria-hidden="true"
              >
                Ver más
                <Icon name="chevron-right" size={13} strokeWidth={2.5} />
              </span>
            </button>
          ))}
        </div>

        {/* Enlace a todos los servicios */}
        <div
          className="text-center animate-in fade-in duration-600 fill-mode-both"
          style={{ animationDelay: "360ms" }}
        >
          <button
            onClick={() => navigate(serviceAreas.allServicesLink)}
            className="inline-flex items-center gap-2 text-[15px] font-semibold transition-all duration-300 hover:gap-3 focus:outline-none focus:ring-2 focus:ring-[#0284c7]/40 rounded-lg px-2 py-1"
            style={{ color: "#0284c7" }}
          >
            Ver todos los servicios
            <Icon name="arrow-right" size={16} strokeWidth={2.5} />
          </button>
        </div>
      </Container>
    </Section>
  );
};
