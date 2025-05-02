import { motion } from "framer-motion";
import ConfettiExplosion from "react-confetti-explosion";
import { useState } from "react";

const TimelineItem = ({ experience, isLast }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex gap-6 items-start group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Ligne verticale */}
      {!isLast && (
        <motion.div
          className="absolute top-6 left-2 w-px h-full bg-gradient-to-b from-blue-500 to-green-500"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      )}

      {/* Point + Icône */}
      <motion.div
        className="relative w-5 h-5 bg-white border-4 rounded-full z-10 flex items-center justify-center cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{
          scale: 1.3,
          boxShadow: `0px 0px 12px ${experience.color}`,
        }}
        style={{ borderColor: experience.color }}
      >
        <experience.Icon className="text-lg" style={{ color: experience.color }} />
        {isHovered && (
          <ConfettiExplosion
            force={0.4}
            duration={1200}
            particleCount={20}
            width={160}
          />
        )}
      </motion.div>

      {/* Contenu */}
      <motion.div
        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
        className="flex flex-col p-2 rounded-md transition-all"
      >
        <h3 className="text-lg font-semibold text-white">{experience.title}</h3>
        <span className="text-stone-400 text-sm italic mb-1">
          {experience.period}
        </span>
        <p className="text-stone-500 text-sm mt-1 max-w-md leading-relaxed">
          {experience.description}
        </p>

        {/* Technologies */}
        {experience.technologies.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-3">
            {experience.technologies.map(({ Icon, color }, idx) => (
              <Icon key={idx} className="text-2xl" style={{ color }} />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TimelineItem;
