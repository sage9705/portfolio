'use client';
import React, { useTransition, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TabButton from "./tabbutton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: [
      "Node.js", "Express", "PostgreSQL", "MongoDB", "SQL", "Next.js",
      "React", "Angular", "JavaScript", "TypeScript", "C", "C++",
      "C#", "Python", "PHP", "Java"
    ]
  },
  {
    title: "Education",
    id: "education",
    content: [
      "B.A Philosophy & Information Science",
      "University of Ghana"
    ]
  },
  {
    title: "Certifications",
    id: "certifications",
    content: []
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const renderContent = (content) => {
    if (content.length === 0) {
      return null; 
    }

    return (
      <motion.ul 
        className={tab === 'skills' ? "flex flex-wrap gap-4 justify-center" : "space-y-2"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {content.map((item, index) => (
          <motion.li 
            key={index} 
            className={tab === 'skills' ? "bg-gradient-to-r from-[#4ce6de] to-[#00ffc3] text-[#121212] min-w-[120px] and max-w-[200px] p-3" : "text-[#e0e0e0]"}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    );
  };

  return (
    <section className="text-[#e0e0e0] py-20 bg-gradient-to-b from-[#121212] to-[#1f1f1f]" id="about">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#4ce6de] to-[#00ffc3]">About Me</h2>
          <p className="text-lg sm:text-xl mb-12 text-center leading-relaxed">
            I&apos;m a self-taught software engineer, fullstack developer, data scientist, data analyst, and trained data engineer.
            I have a penchant for technology, with a strong passion for creating interactive and responsive web applications, as well as developing robust systems. I enjoy exploring innovative tech through tinkering.
            I&apos;m always excited to tackle new challenges and expand my skill set in this ever-evolving field of technology.
          </p>
          <div className="flex justify-center mb-8">
            {TAB_DATA.map((tabItem) => (
              TAB_DATA.find((t) => t.id === tabItem.id).content.length > 0 && (
                <TabButton
                  key={tabItem.id}
                  selectTab={() => handleTabChange(tabItem.id)}
                  active={tab === tabItem.id}
                >
                  {tabItem.title}
                </TabButton>
              )
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1a1a1a] p-6 rounded-lg shadow-xl"
            >
              {renderContent(TAB_DATA.find((t) => t.id === tab).content)}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;