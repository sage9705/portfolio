import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
      <Link
        href="/#contact"
        className="px-8 py-3 rounded-full bg-gradient-to-r from-[#4ce6de] via-[#00ffc3] to-[#4ce6de] text-[#0e0e0e] font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#00ffc3]/50 transform hover:scale-105"
      >
        Hire Me
      </Link>
      <Link
        href="/"
        className="px-8 py-3 rounded-full bg-gradient-to-r from-[#121212] via-[#4ce6de] to-[#121212] text-transparent bg-clip-text font-bold text-lg border-2 border-[#4ce6de] transition-all duration-300 hover:shadow-lg hover:shadow-[#4ce6de]/30 transform hover:scale-105"
      >
        <span className="bg-gradient-to-r from-[#121212] via-[#4ce6de] to-[#121212] text-transparent bg-clip-text bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-300">
          Download CV
        </span>
      </Link>
    </div>
  );
};

export default CTA;