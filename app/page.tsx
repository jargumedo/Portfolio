"use client";

import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/NavBar";
import Languages from "./components/Languages";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
          <Skills />
          <Languages />
          <Projects />
          <Contact />
        </motion.div>
      </div>
    </main>
  );
}
