import { Container } from "../../ui/Container";
import { companyContent } from "../../../content/site/company";
import { FooterLinks } from "./FooterLinks";
import { FooterContact } from "./FooterContact";
import { FooterBottom } from "./FooterBottom";

export const Footer = () => {
  // Temporary mock structure for links
  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
  ];
  const servicesLinks = [
    { label: "Life Insurance", href: "/services/life" },
    { label: "Auto Insurance", href: "/services/auto" },
  ];

  return (
    <footer className="bg-surface pt-16 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="font-bold text-xl tracking-tight text-primary">{companyContent.logoText}</span>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              {companyContent.description}
            </p>
          </div>
          
          <FooterLinks title="Company" links={companyLinks} />
          <FooterLinks title="Services" links={servicesLinks} />
          <FooterContact />
        </div>
        <FooterBottom />
      </Container>
    </footer>
  );
};
