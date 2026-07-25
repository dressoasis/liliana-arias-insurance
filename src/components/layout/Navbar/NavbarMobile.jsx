import React from 'react';
import { NavLink } from 'react-router-dom';
import { navigation } from './navigation';

export default function NavbarMobile() {
  return (
    <div className="lg:hidden">
      <nav className="flex flex-col gap-2">
        {navigation.map((item) => (
          <NavLink key={item.id} to={item.path} className="block py-2">
            {item.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
