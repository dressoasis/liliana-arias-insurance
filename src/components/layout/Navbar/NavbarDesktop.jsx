import { NavLink } from "react-router-dom";

import { navigation } from "./navigation";

function NavbarDesktop() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          className={({ isActive }) =>
            [
              "font-medium transition-colors",
              isActive
                ? "text-primary"
                : "text-slate-700 hover:text-primary",
            ].join(" ")
          }
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavbarDesktop;