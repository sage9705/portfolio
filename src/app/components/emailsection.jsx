"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GithubIcon from "../../../public/images/github.png";
import LinkedinIcon from "../../../public/images/linkedin.png";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.status === "Message Sent") {
        setEmailSubmitted(true);
        e.target.reset();
        setTimeout(() => {
          setEmailSubmitted(false);
        }, 5000);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("There was an error sending the message:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },  
  };

  return (
    <section className="mt-[-110px] mb-[-200px] text-[#E0E0E0] ">
      <motion.div
        className="container mx-auto px-4"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12" variants={containerVariants}>
          <motion.div variants={childVariants}>
            <h2 className="text-4xl font-bold mb-6 text-[#FF6B6B]" id="contact">
              Let&apos;s Connect
            </h2>
            <p className="mb-6 text-lg">
              Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <div className="flex space-x-4 mb-8">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href="https://github.com/sage9705" target="_blank" rel="noopener noreferrer">
                  <Image src={GithubIcon} alt="Github Icon" height={40} width={40} className="hover:opacity-80 transition-opacity" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href="https://www.linkedin.com/in/edem-kumahor-1995aa141" target="_blank" rel="noopener noreferrer">
                  <Image src={LinkedinIcon} alt="Linkedin Icon" height={40} width={40} className="hover:opacity-80 transition-opacity" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <motion.div variants={childVariants}>
            {emailSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-200 text-[#121212] p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p>Your message has been sent successfully. I&apos;ll get back to you soon!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={childVariants}>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="w-full px-3 py-2 bg-[#1E1E1E] border border-[#616060] rounded-lg focus:ring-2 focus:ring-[#616060] transition-all duration-300"
                    placeholder="job@example.com"
                  />
                </motion.div>
                <motion.div variants={childVariants}>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className="w-full px-3 py-2 bg-[#1E1E1E] border border-[#616060] rounded-lg focus:ring-2 focus:ring-[#616060] transition-all duration-300"
                    placeholder="Hello there!"
                  />
                </motion.div>
                <motion.div variants={childVariants}>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-[#1E1E1E] border border-[#616060] rounded-lg focus:ring-2 focus:ring-[#616060] transition-all duration-300"
                    placeholder="Your message here..."
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-[#FF6B6B] text-[#121212] font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            )}
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[#FF6B6B] mt-4"
              >
                {error}
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EmailSection;