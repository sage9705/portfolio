import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <motion.button
      className={`rounded-full px-6 py-3 text-xl cursor-pointer ${
        isSelected
          ? "bg-purple-500 text-white"
          : "bg-gray-800 text-gray-300 hover:bg-gray-700"
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