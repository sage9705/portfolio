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
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 border-b border-[#33353F]">
      <div className="container mx-auto px-4 py-2 lg:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.jpg"
            alt="logo"
            className="rounded-full"
            width={40}
            height={40}
          />
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="p-2 text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-200"
            aria-label="Toggle menu"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;

