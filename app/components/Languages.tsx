"use client";

import { motion } from "framer-motion";

export default function Languages() {
  const languages = [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Advanced" },
  ];

  return (
    <section
      id="languages"
      className="py-10 px-6 bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl flex flex-col"
    >
      <h2 className="text-3xl font-bold mb-10 ">Languages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
        {languages.map((lang, index) => (
          <motion.div
            key={index}
            className="relative h-40 bg-black/50 rounded-xl flex flex-col justify-center items-center p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="font-medium text-lg mb-2">{lang.name}</h3>
            <p className="text-gray-400">{lang.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
