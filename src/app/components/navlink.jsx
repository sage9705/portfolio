import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = ({ href, title }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-[#4ce6de] sm:text-xl rounded md:p-0 hover:text-white transition-colors duration-300"
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default NavLink;