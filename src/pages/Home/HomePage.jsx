import { Hero } from "@/features/home/sections/Hero/Hero";
import { ServicesSection } from "@/features/home/sections/Services/ServicesSection";
import { CompaniesSection } from "@/features/home/sections/Companies/CompaniesSection";

function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <CompaniesSection />
    </main>
  );
}

export default HomePage;