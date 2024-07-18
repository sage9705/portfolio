"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "../components/projectcard";
import ProjectTag from "../components/projecttag";
import { motion, useAnimation, useInView } from "framer-motion";
import projectsData from "../data/projectsData";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
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

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

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
    <section id="projects" className="relative py-20 mt-[-230px] text-[#E0E0E0]">
      <div className="absolute inset-0" />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        className="container mx-auto px-4 relative z-10"
      >
        <h2 className="text-5xl font-extrabold mb-12 text-center text-[#FF6B6B]">
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
        <motion.ul
          className="space-y-8"
          variants={sectionVariants}
        >
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                technologies={project.technologies}
              />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;