import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-gray-400" : "text-gray-800";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-gray-200 ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[#FF6B6B] mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
