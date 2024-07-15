import React from "react";
import { motion } from "framer-motion";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div
        className="h-48 md:h-60 relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <motion.div
          className="overlay absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="flex space-x-4">
            <Link href={gitUrl} className="text-white hover:text-purple-500 transition-colors duration-300">
              <CodeBracketIcon className="h-10 w-10" />
            </Link>
            <Link href={previewUrl} className="text-white hover:text-purple-500 transition-colors duration-300">
              <EyeIcon className="h-10 w-10" />
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h5 className="text-2xl font-bold mb-2 text-white">
          {title}
        </h5>
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        <div className="flex justify-end space-x-4">
          <Link href={gitUrl} className="text-sm text-purple-500 hover:text-purple-400 transition-colors duration-300">
            View Code
          </Link>
          <Link href={previewUrl} className="text-sm text-purple-500 hover:text-purple-400 transition-colors duration-300">
            Live Demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;