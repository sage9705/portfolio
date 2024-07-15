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
        <h2 className="text-center text-5xl font-extrabold text-white mb-12 bg-clip-text text-transparent">
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
        <motion.div className="flex justify-center gap-4 mb-8">
          {["All", "Completed", "Ongoing", "Halted"].map((statusName) => (
            <motion.button
              key={statusName}
              onClick={() => handleStatusChange(statusName)}
              className={`text-sm py-2 px-4 rounded-lg ${
                status === statusName
                  ? "bg-purple-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-purple-500 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {statusName}
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
