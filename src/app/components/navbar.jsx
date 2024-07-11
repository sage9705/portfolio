"use client";
import Link from "next/link";
import React, { useState, useCallback } from "react";
import NavLink from "./navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./menuoverlay";
import Image from "next/image";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  const toggleNavbar = useCallback(() => {
    setNavbarOpen(prev => !prev);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <span>
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.jpg"
              alt="logo"
              className="rounded-full"
              width={40}
              height={40}
            />
            
          </Link>
          </span>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {navbarOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} closeMenu={toggleNavbar} />}
    </nav>
  );
};

export default Navbar;