import { Link } from "react-router-dom";
import logoHorizontal from "../../../assets/logos/logo-transparent.png";
import { companyContent } from "../../../content/site/company";

export const Logo = () => {
  return (
    <Link
      to="/"
      className="relative flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
      aria-label={`Ir al inicio — ${companyContent.name}`}
    >
      <img
        src={logoHorizontal}
        alt={`${companyContent.name} — Licensed Insurance Advisor`}
        className="h-20 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
        draggable="false"
      />
    </Link>
  );
};
