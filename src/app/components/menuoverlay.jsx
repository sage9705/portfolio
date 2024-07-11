import React from "react";
import NavLink from "./navlink";

const MenuOverlay = ({ links, closeMenu }) => (
  <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm">
    <div 
      className="h-full w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4 transform transition-all duration-300 ease-in-out animate-slideIn"
    >
      <button 
        onClick={closeMenu}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <nav className="mt-8">
        <ul className="space-y-4">
          {links.map((link, index) => (
            <li 
              key={link.title}
              className="transform transition-all duration-300 ease-in-out hover:translate-x-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <NavLink
                href={link.path}
                title={link.title}
                className="block py-2 text-lg font-medium text-gray-300 hover:text-white transition duration-150 ease-in-out border-b border-gray-700"
                onClick={closeMenu}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
);

export default MenuOverlay;