import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-[#4ce6de]" : "text-black";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-[#2e8a85] ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[#2cc9c9] mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
