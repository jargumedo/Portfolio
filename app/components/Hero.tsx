"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  const email = "juliargumedoblanco@gmail.com";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 w-full">
        <motion.div
          className="space-y-6 bg-gradient-to-br from-black to-black p-8 rounded-3xl"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center">
              <span className="text-white font-bold">JA</span>
            </div>
            <div>
              <h1 className="text-xl">Hi, I'm Juliano Argumedo</h1>
              <p className="text-gray-400">Front-end developer</p>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Passionate about
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-200 to-yellow-500">
              technology and innovation.
            </span>
          </h2>

          <motion.a
            href={`mailto:${email}`}
            className="inline-block bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-bold py-3 px-8 rounded-full text-sm sm:text-lg mb-8 hover:bg-yellow-300 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope className="inline-block mr-2 mb-1" />
            Get in touch
          </motion.a>

          <p className="text-gray-400 text-lg">
            I thrive on learning and overcoming challenges, constantly analyzing
            my growth and improvement.
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
          className="bg-gradient-to-br from-black to-yellow-500 p-8 rounded-3xl flex items-center justify-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative w-64 h-64 cursor-pointer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.img
              src="/fotoPersonal.jpg"
              alt="Mi imagen"
              className="w-full h-full object-cover rounded-full shadow-2xl"
              initial={{ opacity: 1 }}
              animate={{ opacity: isHovered ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="/avatar.webp"
              alt="Mi avatar"
              className="w-full h-full object-cover rounded-full shadow-2xl absolute top-0 left-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
