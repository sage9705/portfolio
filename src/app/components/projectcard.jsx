import React from "react";
import { motion } from "framer-motion";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, technologies }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div
        className="h-48 md:h-auto md:w-1/3 relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <motion.div
          className="overlay absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="flex space-x-4">
            <Link href={gitUrl} className="text-white hover:text-cyan-400 transition-colors duration-300">
              <CodeBracketIcon className="h-10 w-10" />
            </Link>
            <Link href={previewUrl} className="text-white hover:text-cyan-400 transition-colors duration-300">
              <EyeIcon className="h-10 w-10" />
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="p-6 md:w-2/3 flex flex-col justify-between">
        <div>
          <h5 className="text-2xl font-bold mb-3 text-white">
            {title}
          </h5>
          <p className="text-gray-300 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span key={index} className="px-3 py-1 text-sm text-cyan-400 bg-cyan-900 bg-opacity-25 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <Link href={gitUrl} className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
            View Code
          </Link>
          <Link href={previewUrl} className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
            Live Demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;