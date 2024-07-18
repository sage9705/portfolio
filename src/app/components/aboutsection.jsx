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
      "C#", "Python", "PHP", "Java", "Numpy", "Pandas", "Scikit-learn", "Airflow", "Kafka"
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
        className={tab === 'skills' ? "grid grid-cols-2 md:grid-cols-3 gap-4" : "space-y-2"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {content.map((item, index) => (
          <motion.li
            key={index}
            className={tab === 'skills' ? "bg-[#1E1E1E] text-[#E0E0E0] px-4 py-2 text-sm md:text-base rounded" : "text-[#E0E0E0]"}
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
    <section className="min-h-screen mt-[-80px] text-[#E0E0E0] overflow-hidden" id="about">
      <div className="container mx-auto px-4 py-16 relative">
        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-12 text-center text-[#FF6B6B]">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/2">
              <p className="text-lg md:text-xl mb-4">
                I&apos;m a self-taught tech generalist with expertise in software engineering, full-stack development, data science, data analysis and engineering.
              </p>
              <p className="text-lg md:text-xl mb-4">
                I have a keen affinity for technology, driven by a strong passion for crafting interactive and responsive web applications and developing robust systems. I enjoy exploring innovative tech through tinkering.
              </p>
              <p className="text-lg md:text-xl">
                I&apos;m always excited to tackle new challenges and expand my skill set in this ever-evolving field of technology.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="flex flex-wrap gap-4 mb-8">
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
                  className="w-full bg-[#1E1E1E] p-6 rounded-lg"
                >
                  {renderContent(TAB_DATA.find((t) => t.id === tab).content)}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;