import { companyContent } from "../../../content/site/company";

export const FooterBottom = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="border-t border-border py-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm text-muted">
        &copy; {currentYear} {companyContent.name}. All rights reserved.
      </p>
      <div className="flex space-x-4 text-sm text-muted">
        <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
        <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
      </div>
    </div>
  );
};
