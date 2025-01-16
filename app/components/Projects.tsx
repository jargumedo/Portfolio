"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Salva Mi Huella",
      description:
        "A modern web application built with React and Node.js including user management and admin-only view gateways",
      technologies: [
        "React",
        "Redux",
        "Javascript",
        "Tailwind CSS",
        "Bootstrap",
        "Node.js",
        "Express.js",
      ],
      github: "https://github.com/Salva-mi-huella/client",
      live: "https://salva-mi-huella.vercel.app/",
      image: "/Salva Mi Huella.png",
    },
    {
      title: "Estoy Aca",
      description:
        "Service exchange and job opportunity platform with payment gateways, real-time chat, notifications and user management",
      technologies: ["Vue", "Javascript", "PHP", "Laravel", "Tailwind CSS"],
      image: "/Estoy Aca.png",
    },
    {
      title: "Tu Plato Ahora",
      description:
        "An e-commerce dedicated to gastronomy with a modern and functional design. Includes metrics from the admin view such as sales and profits",
      technologies: [
        "React",
        "Javascript",
        "Java",
        "Springboot",
        "Tailwind CSS",
      ],
      image: "/Tu Plato Ahora.png",
      github: "https://github.com/jargumedo/TuPlatoApp",
      live: "https://tuplatoapp.vercel.app/home",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <motion.div
        className="space-y-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gradient-to-br from-zinc-900 to-black p-6 rounded-3xl group hover:from-zinc-800 hover:to-zinc-900 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="aspect-video relative overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-black/50 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {project.github ? (
                    <FaGithub className="text-xl" />
                  ) : (
                    "Live not available yet. Cooming Soon"
                  )}
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {project.live ? (
                    <FaExternalLinkAlt className="text-xl" />
                  ) : null}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
