import { Link } from "react-router-dom";

export const FooterLinks = ({ title, links }) => {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-sm font-bold text-text uppercase tracking-wider">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.href} className="text-muted hover:text-primary transition-colors text-sm">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
