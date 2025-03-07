"use client";

import { motion } from "framer-motion";
import { FaReact, FaVuejs, FaJs, FaHtml5, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  percentage: number;
  icon: IconType;
}

export default function Skills() {
  const skills: Skill[] = [
    { name: "React", level: "Advanced", percentage: 90, icon: FaReact },
    { name: "Vue", level: "Advanced", percentage: 95, icon: FaVuejs },
    { name: "JavaScript", level: "Advanced", percentage: 90, icon: FaJs },
    {
      name: "Tailwind CSS",
      level: "Advanced",
      percentage: 95,
      icon: SiTailwindcss,
    },
    { name: "HTML/CSS", level: "Advanced", percentage: 95, icon: FaHtml5 },
    {
      name: "TypeScript",
      level: "Intermediate",
      percentage: 75,
      icon: SiTypescript,
    },
    {
      name: "Next.js",
      level: "Intermediate",
      percentage: 70,
      icon: SiNextdotjs,
    },
    { name: "Node.js", level: "Intermediate", percentage: 65, icon: FaNodeJs },
    { name: "MongoDB", level: "Beginner", percentage: 40, icon: SiMongodb },
  ];

  return (
    <section id="skills" className="py-20">
      <motion.div
        className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      className="relative h-40 perspective group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <motion.div className="w-full h-full transition-all duration-300 preserve-3d group-hover:rotate-y-180">
        <div className="absolute w-full h-full backface-hidden">
          <div className="p-4 bg-black/50 rounded-xl h-full flex flex-col justify-center items-center">
            <h3 className="font-medium text-lg mb-2">{skill.name}</h3>
            <p className="text-gray-400">{skill.level}</p>
          </div>
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="p-4 bg-black/50 rounded-xl h-full flex flex-col justify-center items-center">
            <h3 className="font-medium text-lg mb-4">{skill.name}</h3>
            <skill.icon className="text-6xl text-yellow-400" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
