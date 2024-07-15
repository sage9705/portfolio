"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "../components/projectcard";
import ProjectTag from "../components/projecttag";
import { motion, useAnimation, useInView } from "framer-motion";
import projectsData from "../data/projectsData";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [status, setStatus] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const filteredProjects = projectsData.filter((project) => {
    const tagMatch = project.tag.includes(tag) || tag === "All";
    const statusMatch = project.status === status || status === "All";
    return tagMatch && statusMatch;
  });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const tagVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="projects" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br" />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        className="container mx-auto px-4 relative z-10"
      >
        <h2 className="text-center text-5xl font-extrabold text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#4ce6de] to-[#00ffc3]">
          My Projects
        </h2>
        <motion.div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          {["All", "Web", "Desktop"].map((tagName) => (
            <motion.div key={tagName} variants={tagVariants}>
              <ProjectTag
                onClick={handleTagChange}
                name={tagName}
                isSelected={tag === tagName}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="flex flex-wrap justify-center gap-4 mb-8">
          {["All", "Completed", "Ongoing", "Halted"].map((statusName) => (
            <motion.button
              key={statusName}
              onClick={() => handleStatusChange(statusName)}
              className={`px-6 py-2 text-center rounded-full font-bold text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
                status === statusName
                  ? "bg-gradient-to-r from-[#4ce6de] via-[#00ffc3] to-[#4ce6de] text-[#0e0e0e] hover:shadow-[#00ffc3]/50"
                  : "bg-gradient-to-r from-[#121212] via-[#4ce6de] to-[#121212] text-transparent bg-clip-text border-2 border-[#4ce6de] hover:shadow-[#4ce6de]/30"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={status === statusName ? "" : "bg-gradient-to-r from-[#121212] via-[#4ce6de] to-[#121212] text-transparent bg-clip-text bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-300"}>
                {statusName}
              </span>
            </motion.button>
          ))}
        </motion.div>
        <motion.ul
          className="grid md:grid-cols-3 gap-8 md:gap-12"
          variants={sectionVariants}
        >
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                status={project.status} 
              />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;