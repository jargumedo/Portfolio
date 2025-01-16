"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 w-full">
        <motion.div
          className="space-y-6 bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
              <span className="text-black font-bold">JA</span>
            </div>
            <div>
              <h1 className="text-xl">Hi, Im Juliano Argumedo</h1>
              <p className="text-gray-400">Front-end developer</p>
            </div>
          </div>

          <h2 className="text-5xl font-bold leading-tight">
            Passionate to pursue
            <br />
            the technology.
          </h2>

          <p className="text-gray-400 text-lg">
            I enjoy learning new things and try to overcome new challenges while
            analyzing how I improved through them.
          </p>

          <div className="flex gap-4">
            <motion.a
              href="https://github.com/jargumedo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/julianoargumedo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://twitter.com/juliargumedo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-yellow-300 to-yellow-500 p-8 rounded-3xl flex items-center justify-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-64 h-64">
            <img
              src="/fotoPersonal.jpg"
              alt="Mi imagen"
              className="w-full h-full object-cover rounded-full shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
