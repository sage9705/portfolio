"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="container flex flex-col sm:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center sm:text-left"
        >
          <div>
            <h1 className="text-white mb-4 text-[24px] sm:text-3xl lg:text-3xl lg:leading-normal font-extrabold">
              <span className="text-[#00ffc3;]">
              Hello, I&apos;m{" Godwin "}
              </span>
              <br />
              <div className="h-8 flex items-center justify-center">
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    1000,
                    "Data Engineer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            </h1>
          </div>
          <div>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            From the inner workings of computers to the cutting edge of technology, I'm a software engineer fueled by a passion to understand it all! My journey began years ago, and along the way, I've gained valuable experience at Trestle Academy Ghana, INNGEN, and 4th-IR.
            </p>
          </div>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex justify-center mt-4 lg:mt-0"
        >
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero_image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={600}
              height={600}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
