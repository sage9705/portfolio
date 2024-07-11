'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-[#121212] to-[#1f1f1f] text-[#e0e0e0]">
      <motion.h1 
        className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#4ce6de] to-[#00ffc3]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.p 
        className="text-2xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="px-8 py-3 rounded-full bg-gradient-to-r from-[#4ce6de] via-[#00ffc3] to-[#4ce6de] text-[#0e0e0e] font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#00ffc3]/50 transform hover:scale-105">
            Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default Custom404;
