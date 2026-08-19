import { Section } from "../../../../components/ui/Section";
import { Container } from "../../../../components/ui/Container";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";
import { HeroTrustIndicators } from "./HeroTrustIndicators";
import { HeroImage } from "./HeroImage";

import { heroContent } from "../../../../content/home/hero";

export const Hero = () => {
  return (
    <Section
      className="relative overflow-hidden"
      spacing="lg"
      as="section"
      aria-label="Introducción Principal — Liliana Arias Insurance"
    >
      {/* Capa de fondo premium */}
      <HeroBackground />

      <Container className="relative z-10 pt-28 md:pt-32 pb-8">
        {/* Grid principal: dos columnas en desktop, una vertical en mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-[48%_1fr] gap-10 lg:gap-12 xl:gap-20 items-center min-h-[82vh]">

          {/* Columna izquierda: stack de contenido */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-7 w-full order-1">
            <HeroContent />
            <HeroActions buttons={heroContent.buttons} />
            <div className="hidden lg:block w-full">
              <HeroTrustIndicators indicators={heroContent.trustIndicators} />
            </div>
          </div>

          {/* Columna derecha: fotografía + widgets flotantes */}
          <div className="w-full order-2">
            <HeroImage
              src={heroContent.image.src}
              alt={heroContent.image.alt}
            />
          </div>

          {/* Trust indicators en mobile (al final) */}
          <div className="block lg:hidden w-full order-3 mt-4">
            <HeroTrustIndicators indicators={heroContent.trustIndicators} />
          </div>

        </div>

      </Container>
    </Section>
  );
};
