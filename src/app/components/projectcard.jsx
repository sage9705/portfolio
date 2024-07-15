import React from "react";
import { motion } from "framer-motion";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-xl overflow-hidden"
      whileHover={{ y: -5 }}
    >
      <div
        className="h-52 md:h-72 relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <motion.div
          className="overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 p-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="flex justify-center space-x-4">
            <Link href={gitUrl} className="text-white hover:text-purple-500">
              <CodeBracketIcon className="h-10 w-10" />
            </Link>
            <Link href={previewUrl} className="text-white hover:text-purple-500">
              <EyeIcon className="h-10 w-10" />
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="p-4">
        <h5 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          {title}
        </h5>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;