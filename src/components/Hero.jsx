import profilePic from "../assets/profile.jpeg";
import { HERO_CONTENT } from "../constants/hero";
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-wrap items-center justify-center pt-32">
      
      {/* Image de profil avec anneau animé */}
      <motion.div 
        className="w-full lg:w-1/2 flex justify-center p-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative group">
          {/* Anneau lumineux */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 animate-spin-slow blur-lg opacity-50"></div>
          
          {/* Image avec un petit fond sombre dessous */}
          <div className="relative rounded-3xl overflow-hidden p-2 bg-black">
            <img
              src={profilePic}
              alt="Brandon Kamga"
              className="rounded-2xl max-w-sm sm:max-w-md lg:max-w-lg transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>

      {/* Texte animé */}
      <motion.div 
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left p-6"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl lg:text-7xl font-bold mb-4 text-stone-300">
          Kamga Brandon
        </h2>

        {/* Typing Effect fluide infini */}
        <TypeAnimation
          sequence={[
            "Full Stack Developer & DevOps | ML Enthusiast", 
            2000,
            "", 
            500
          ]}
          speed={50}
          deletionSpeed={30}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-2xl lg:text-4xl text-transparent mb-6"
        />

        {/* Texte HERO_CONTENT */}
        <p className="text-lg leading-relaxed max-w-lg mb-6 text-stone-400">
          {HERO_CONTENT}
        </p>

        {/* Bouton simple outline */}
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 font-semibold transition-all duration-300"
        >
          View Resume
        </a>

      </motion.div>
    </div>
  );
};

export default Hero;
