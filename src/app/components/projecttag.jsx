import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <motion.button
      className={`rounded-full px-6 py-3 text-xl cursor-pointer ${
        isSelected
          ? "bg-gradient-to-r from-[#4ce6de] via-[#00ffc3] to-[#4ce6de] text-[#0e0e0e] hover:shadow-[#00ffc3]/50"
          : "bg-gradient-to-r from-[#121212] via-[#4ce6de] to-[#121212] text-transparent bg-clip-text border-2 border-[#4ce6de] hover:shadow-[#4ce6de]/30"
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