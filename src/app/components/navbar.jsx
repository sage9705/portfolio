"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./menuoverlay";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-10 ${
        scrolled ? "bg-black bg-opacity-80 backdrop-blur-md" : "bg-transparent"
      } transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.jpg"
                alt="logo"
                className="rounded-full"
                width={40}
                height={40}
              />
            </Link>
          </motion.span>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              {navLinks.map((link) => (
                <motion.li
                  key={link.title}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <NavLink href={link.path} title={link.title} />
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="md:hidden">
            <motion.button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={navbarOpen ? "close" : "open"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {navbarOpen ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {navbarOpen && (
          <MenuOverlay links={navLinks} closeMenu={toggleNavbar} />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;