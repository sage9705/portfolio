"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimation } from "framer-motion";

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

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#121212] to-[#1f1f1f] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffc3] to-[#4ce6de]">
                Hello, I&apos;m Godwin
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 relative"
          >
            <motion.div
              animate={imageControls}
              className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
            >
              <Image
                src="/images/hero_image.png"
                alt="hero image"
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