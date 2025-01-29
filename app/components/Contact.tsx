"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";

export default function Contact() {
  const email = "juliargumedoblanco@gmail.com";
  const whatsappNumber = "+5492613348352"; // Reemplaza con tu número de WhatsApp

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/jargumedo", label: "GitHub" },
    {
      icon: FaLinkedin,
      url: "https://linkedin.com/in/julianoargumedo",
      label: "LinkedIn",
    },
    {
      icon: FaTwitter,
      url: "https://twitter.com/juliargumedo",
      label: "Twitter",
    },
    {
      icon: FaWhatsapp,
      url: `https://wa.me/${whatsappNumber}`,
      label: "WhatsApp",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <motion.div
        className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-6">Lets work together</h2>
        <p className="text-xl text-gray-400 mb-8">
          Ready to start your next project? Im here to help!
        </p>

        <div className="flex justify-center gap-2 ">
          <motion.a
            href={`mailto:${email}`}
            className="inline-block bg-gradient-to-r from-orange-400 to-yellow-500 text-black font-bold py-3 px-8 rounded-full text-sm sm:text-lg mb-8 hover:bg-yellow-300 transition-colors duration-300 "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope className="inline-block mr-2 mb-1" />
            Get in touch
          </motion.a>
          <motion.a
            href="/CV ENG JULIANO ARGUMEDO 2025.pdf" // Ruta al archivo CV
            download="CV ENG Juliano Argumedo.pdf" // Nombre del archivo que se descargará
            className="inline-block bg-gradient-to-r from-orange-400 to-yellow-500 text-black font-bold py-3 px-8 rounded-full text-sm sm:text-lg mb-8 hover:bg-yellow-300 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="inline-block mr-2 mb-1" />
            Download CV
          </motion.a>
        </div>

        <div className="flex justify-center space-x-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={link.label}
            >
              <link.icon />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
