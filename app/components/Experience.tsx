import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Senior Front End Developer",
      company: "Tech Co",
      period: "2020 - Present",
    },
    {
      title: "Front End Developer",
      company: "Web Solutions",
      period: "2018 - 2020",
    },
    {
      title: "Junior Developer",
      company: "Startup Inc",
      period: "2016 - 2018",
    },
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-10">Experiencia</h2>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <p className="text-gray-400">
            {exp.company} | {exp.period}
          </p>
        </motion.div>
      ))}
    </section>
  );
}
