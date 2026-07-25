import { useLocation, Link } from "react-router-dom";
import { Icon } from "../ui/Icon";
import { getRouteTitle } from "./RouteConfig";

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // No renderizar breadcrumbs en el home
  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-sm text-muted mb-8">
      <Link 
        to="/" 
        className="hover:text-primary transition-colors flex items-center p-1 rounded focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Inicio
      </Link>
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const title = getRouteTitle(routeTo);

        return (
          <div key={name} className="flex items-center gap-2">
            <Icon name="chevron-right" className="w-4 h-4 opacity-40 shrink-0" />
            {isLast ? (
              <span 
                className="font-semibold text-text px-1" 
                aria-current="page"
              >
                {title}
              </span>
            ) : (
              <Link 
                to={routeTo} 
                className="hover:text-primary transition-colors p-1 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {title}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};
