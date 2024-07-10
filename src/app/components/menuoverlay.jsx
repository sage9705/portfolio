import React from "react";
import NavLink from "./navlink";

const MenuOverlay = ({ links, closeMenu }) => (
  <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {links.map((link) => (
        <NavLink
          key={link.title}
          href={link.path}
          title={link.title}
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition duration-150 ease-in-out"
          onClick={closeMenu}
        />
      ))}
    </div>
  </div>
);

export default MenuOverlay;