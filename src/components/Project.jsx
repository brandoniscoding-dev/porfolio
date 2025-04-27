import { PROJECTS } from "../constants/project";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const Project = () => {
  return (
    <section id="projects" className="relative py-24 px-4 max-w-6xl mx-auto overflow-hidden">
      {/* Background subtil */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-black via-stone-900 to-black opacity-20" />

      {/* Titre */}
      <motion.h2
        className="relative z-10 text-4xl font-extrabold text-center text-white mb-16"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {/* Grille plus compacte */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all max-w-md mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image projet OU fallback */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-full h-[180px] group overflow-hidden flex items-center justify-center bg-stone-900"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-center bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]">
                  <h3 className="text-3xl font-extrabold text-white px-6 leading-tight">
                    {project.title}
                  </h3>
                </div>
              )}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Détails */}
            <div className="p-5 flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 justify-start">
                {project.technologiesIcons?.length > 0 ? (
                  project.technologiesIcons.map(({ Icon, color }, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.2 }}
                      className="text-2xl"
                      style={{ color }}
                    >
                      <Icon />
                    </motion.div>
                  ))
                ) : (
                  <span className="text-stone-400 text-xs italic">No tech</span>
                )}
              </div>

              {/* Boutons Github / View Project */}
              <div className="flex flex-wrap gap-4 mt-4">
                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500 font-semibold px-5 py-2 text-sm transition-all shadow-md hover:shadow-lg"
                  >
                    GitHub Project <FaGithub className="text-xs" />
                  </motion.a>
                )}
                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500 font-semibold px-5 py-2 text-sm transition-all shadow-md hover:shadow-lg"
                  >
                    View Project <FaArrowUpRightFromSquare className="text-xs" />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
