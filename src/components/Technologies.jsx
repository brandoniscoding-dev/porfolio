import { BiLogoPostgresql } from 'react-icons/bi'
import { DiRedis } from 'react-icons/di'
import { FaNodeJs, FaAws, FaGithub } from 'react-icons/fa'
import { RiNextjsLine, RiReactjsLine } from 'react-icons/ri'
import { SiMongodb, SiDocker, SiKubernetes, SiTerraform, SiJenkins, SiMysql } from 'react-icons/si'
import { motion } from 'framer-motion'

const technologies = [
  { icon: <RiReactjsLine className="text-cyan-400" size={60} />, name: 'React', type: 'Frontend' },
  { icon: <RiNextjsLine className="text-white" size={60} />, name: 'Next.js', type: 'Frontend' },
  { icon: <FaNodeJs className="text-green-500" size={60} />, name: 'Node.js', type: 'Backend' },
  { icon: <DiRedis className="text-red-500" size={60} />, name: 'Redis', type: 'Backend' },
  { icon: <SiMongodb className="text-green-400" size={60} />, name: 'MongoDB', type: 'Database' },
  { icon: <BiLogoPostgresql className="text-blue-500" size={60} />, name: 'PostgreSQL', type: 'Database' },
  { icon: <SiMysql className="text-blue-300" size={60} />, name: 'MySQL', type: 'Database' },
  { icon: <SiDocker className="text-blue-400" size={60} />, name: 'Docker', type: 'DevOps' },
  { icon: <SiKubernetes className="text-blue-600" size={60} />, name: 'Kubernetes', type: 'DevOps' },
  { icon: <FaAws className="text-yellow-400" size={60} />, name: 'AWS', type: 'Cloud' },
  { icon: <SiJenkins className="text-red-600" size={60} />, name: 'Jenkins', type: 'DevOps' },
  { icon: <SiTerraform className="text-purple-500" size={60} />, name: 'Terraform', type: 'DevOps' },
  { icon: <FaGithub className="text-stone-300" size={60} />, name: 'GitHub', type: 'Tools' },
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-32 bg-black relative overflow-hidden">
      {/* Background technique */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-stone-900 to-black opacity-30" />

      {/* Titre principal */}
      <motion.h2 
        className="text-5xl font-bold text-center text-white mb-20 relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Technologies
      </motion.h2>

      {/* Ligne infinie */}
      <motion.div
        className="relative flex overflow-x-hidden py-10"
      >
        <motion.div
          className="flex gap-20 whitespace-nowrap animate-scroll group"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
        >
          {/* Double pour créer l'effet infini */}
          {[...technologies, ...technologies].map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center cursor-pointer hover:scale-110 transition-transform duration-300 group-hover:animate-pause"
            >
              {tech.icon}
              <span className="text-stone-300 text-md mt-2">{tech.name}</span>
              {/* Petit badge selon type */}
              <span className="text-xs text-blue-400 mt-1">{tech.type}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Technologies;
