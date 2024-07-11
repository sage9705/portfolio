"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageControls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    imageControls.start({
      x: (mousePosition.x - window.innerWidth / 2) / 50,
      y: (mousePosition.y - window.innerHeight / 2) / 50,
    });
  }, [mousePosition, imageControls]);

  const ButtonLink = ({ href, className, children }) => (
    <Link href={href} className={className}>
        {children}
    </Link>
  );

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#121212] to-[#1f1f1f]">
      <div className="mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffc3] to-[#4ce6de]">
                Hello, I'm Godwin
              </span>
            </h1>
            <div className="h-16 mb-6">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1000,
                  "Data Engineer",
                  1000,
                  "Problem Solver",
                  1000,
                  "Tech Enthusiast",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-2xl lg:text-4xl font-semibold text-white"
              />
            </div>
            <p className="text-[#e0e0e0] text-lg mb-8 max-w-2xl">
              From the inner workings of computers to the cutting edge of technology, I'm a software engineer fueled by a passion to understand it all! My journey began years ago, and along the way, I've gained valuable experience at Trestle Academy Ghana, INNGEN, and 4th-IR.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
      <ButtonLink
        href="#contact"
        className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#4ce6de] via-[#00ffc3] to-[#4ce6de] text-[#0e0e0e] font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#00ffc3]/50 transform hover:scale-105 active:scale-95 bg-size-200 bg-pos-0 hover:bg-pos-100"
      >
        Hire Me
      </ButtonLink>
      <ButtonLink
        href="/path-to-your-cv.pdf"
        className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#121212] via-[#4ce6de] to-[#121212] text-transparent bg-clip-text font-bold text-lg border-2 border-[#4ce6de] transition-all duration-300 hover:shadow-lg hover:shadow-[#4ce6de]/30 transform hover:scale-105 active:scale-95 bg-size-200 bg-pos-0 hover:bg-pos-100"
      >
        <span className="bg-gradient-to-r from-[#121212] via-[#4ce6de] to-[#121212] text-transparent bg-clip-text bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-300">
          Download CV
        </span>
      </ButtonLink>
    </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 relative"
          >
            <motion.div
              animate={imageControls}
              className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] relative"
            >
              <Image
                src="/images/hero_image.png"
                alt="Godwin"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ffc3] to-[#4ce6de] opacity-20 rounded-full filter blur-3xl"></div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20 bg-repeat"></div>
    </section>
  );
};

export default HeroSection;