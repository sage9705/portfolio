"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  const skills = ["Web Developer", "Data Engineer", "Tech Enthusiast"];
  const colors = ["#FF6B6B", "#4ECDC4", "#FFD93D"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen overflow-hidden text-[#E0E0E0]">
      <div className="container mx-auto px-4 py-16 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className=""
        >
          {/* {skills.map((_, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: activeSkill === index ? 20 : 0,
                opacity: activeSkill === index ? 0.1 : 0,
              }}
              transition={{ duration: 0.8 }}
              style={{ backgroundColor: colors[index] }}
            />
          ))} */}
        </motion.div>

        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#FF6B6B]">
              Hello, I&apos;m Godwin
            </h1>
            <div className="h-16 mb-6">
              <TypeAnimation
                sequence={skills.map((skill) => [skill, 2000]).flat()}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-3xl md:text-5xl font-semibold text-[#616060]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-64 h-64 md:w-80 md:h-80 mb-12"
          >
            <Image
              src="/images/hero_image.png"
              alt="Godwin"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </motion.div>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-center max-w-2xl"
          >
            I engineer robust software solutions and uncover insights through data science to create impactful digital experiences.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {/* {skills.map((skill, index) => (
              <motion.button
                key={skill}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors duration-300 ${
                  activeSkill === index 
                    ? `bg-[${colors[index]}] text-[#121212]` 
                    : "bg-[#1E1E1E] text-[#E0E0E0]"
                }`}
                onClick={() => setActiveSkill(index)}
              >
                {skill}
              </motion.button>
            ))} */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;