'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import GithubIcon from "../../../public/images/github.svg";
import LinkedinIcon from "../../../public/images/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer py-8 px-4 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <h2 className="text-2xl font-bold">Godwin Edem Kumahor</h2>
            <p className="text-gray-400">Software Engineer & Data Scientist</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Link
                href="https://github.com/sage9705"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4ce6de] transition-colors duration-300"
              >
                <Image src={GithubIcon} alt="Github Icon" width={24} height={24} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Link
                href="https://www.linkedin.com/in/edem-kumahor-1995aa141"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4ce6de] transition-colors duration-300"
              >
                <Image src={LinkedinIcon} alt="Linkedin Icon" width={24} height={24} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-gray-700 text-center"
        >
          <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;