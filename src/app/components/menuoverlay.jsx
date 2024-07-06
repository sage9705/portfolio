import React from "react";
import NavLink from "./navlink";

const MenuOverlay = ({ links, closeMenu }) => (
  <div className="absolute top-full left-0 right-0 bg-[#121212] shadow-md">
    <nav>
      <ul className="flex flex-col items-center py-4">
        {links.map((link) => (
          <li key={link.path} className="w-full">
            <NavLink 
              href={link.path} 
              title={link.title} 
              className="block py-2 px-4 text-center text-white hover:bg-[#1e1e1e] transition-colors w-full"
              onClick={closeMenu}
            />
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default MenuOverlay;