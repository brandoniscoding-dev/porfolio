// components/Experiences.jsx
import { EXPERIENCES } from "../constants/experiences";
import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";

const Experiences = () => {
  return (
    <section id="experiences" className="relative py-24 px-6 max-w-5xl mx-auto">
      
      {/* Background animé subtil */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-stone-900 to-black opacity-20 animate-backgroundPulse" />

      {/* Titre principal */}
      <div className="relative z-10 text-center mb-20">
        <motion.h2
          className="text-5xl font-bold text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        {/* Texte fixe "3 ans d'expérience" */}
        <motion.p
          className="mt-4 text-sm text-stone-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          +3 ans d'expérience professionnelle
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="relative z-10 flex flex-col gap-14 ml-4">
        {EXPERIENCES.map((exp, index) => (
          <TimelineItem
            key={exp.id}
            experience={exp}
            isLast={index === EXPERIENCES.length - 1}
          />
        ))}
      </div>

      {/* Ligne verticale progression */}
      <motion.div
        className="absolute top-0 left-2 w-1 h-full bg-gradient-to-b from-blue-400 via-green-400 to-transparent"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
    </section>
  );
};

export default Experiences;
