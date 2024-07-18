'use client';
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-4 px-4 text-[#e0e0e0]">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-[#dfc8c8]">&copy;{new Date().getFullYear()} All rights reserved.</p>
          <p className="text-[#dfc8c8]">Loosely designed off head and coded by: <span>Godwin Edem Kumahor,</span></p>
            <p className="text-[#dfc8c8]">Software Engineer & Data Scientist</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;