"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.nav
      className="py-8 flex justify-between items-center sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl">Juliano Argumedo</span>
        <span className="text-gray-500 ">Front-end Developer</span>
      </div>
      <div className="flex gap-8 ">
        <button
          onClick={() => scrollToSection("skills")}
          className="text-gray-400 hover:text-white transition-colors hidden md:block"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("languages")}
          className="text-gray-400 hover:text-white transition-colors hidden md:block"
        >
          Languages
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="text-gray-400 hover:text-white transition-colors hidden md:block"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="text-gray-400 hover:text-white transition-colors hidden md:block"
        >
          Contact
        </button>
      </div>
    </motion.nav>
  );
}
