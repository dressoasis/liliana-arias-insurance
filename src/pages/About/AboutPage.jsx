import { AboutHero } from "@/features/about/sections/AboutHero/AboutHero";
import { AboutPresentation } from "@/features/about/sections/AboutPresentation/AboutPresentation";
import { AboutValues } from "@/features/about/sections/AboutValues/AboutValues";
import { AboutServiceAreas } from "@/features/about/sections/AboutServiceAreas/AboutServiceAreas";
import { AboutProcess } from "@/features/about/sections/AboutProcess/AboutProcess";
import { AboutCTA } from "@/features/about/sections/AboutCTA/AboutCTA";

function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutPresentation />
      <AboutValues />
      <AboutServiceAreas />
      <AboutProcess />
      <AboutCTA />
    </main>
  );
}

export default AboutPage;
