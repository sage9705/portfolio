'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import CVModal from './modal';

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center px-4 md:px-8 lg:px-16 mt-[-10px] space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          href="/#contact"
          className="px-8 py-3 text-center rounded-full bg-[#FF6B6B] text-[#121212] font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B6B]/50 transform hover:scale-105"
        >
          Connect
        </Link>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-3 text-center rounded-full bg-transparent text-gray-400 font-bold text-lg border-2 border-gray-400 transition-all duration-300 hover:bg-gray-400 hover:text-[#121212] hover:shadow-lg hover:shadow-[#4ECDC4]/30 transform hover:scale-105"
        >
          View CV
        </button>
      </div>
      <CVModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CTA;