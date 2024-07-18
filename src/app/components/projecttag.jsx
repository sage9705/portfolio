import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <motion.button
      className={`rounded-full px-6 py-3 text-xl cursor-pointer ${
        isSelected
          ? "bg-transparent text-gray-400 font-bold text-lg border-2 border-gray-400 transition-all duration-300 hover:bg-gray-400 hover:text-[#121212] hover:shadow-lg hover:shadow-[#4ECDC4]/30 transform hover:scale-105"
          : "bg-transparent text-gray-400 font-bold text-lg border-2 border-gray-400 transition-all duration-300 hover:bg-gray-400 hover:text-[#121212] hover:shadow-lg hover:shadow-[#4ECDC4]/30 transform hover:scale-105"
      }`}
      onClick={() => onClick(name)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {name}
    </motion.button>
  );
};

export default ProjectTag;