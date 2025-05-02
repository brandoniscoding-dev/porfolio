// components/Navbar.jsx
import { FaLinkedin, FaMedium } from 'react-icons/fa';
import { FaSquareGithub, FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed right-0 top-0 z-50 w-full backdrop-blur-lg bg-black/20"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 sm:px-12">

        {/* Logo */}
        <motion.div whileHover={{ scale: 1.1 }} className="flex items-center">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer text-lg sm:text-2xl md:text-3xl font-extrabold text-stone-300 hover:text-blue-400 transition-all"
          >
            brandoniscoding
            <span className="text-2xl sm:text-3xl md:text-4xl text-blue-400 animate-pulse ml-1">.</span>
          </Link>

        </motion.div>

        {/* Menu navigation */}
        <div className="hidden md:flex items-center gap-6 sm:gap-10">
          {[
            { label: "Home", to: "hero" },
            { label: "Technologies", to: "technologies" },
            { label: "Projects", to: "projects" },
            { label: "Experiences", to: "experiences" },
            { label: "Contact", to: "contact" }
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="relative group cursor-pointer text-stone-300 font-medium transition-all"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}

          {/* Blog - avec point rouge clignotant */}
          <div className="relative cursor-default text-stone-300 font-medium hover:text-blue-400 transition-all">
            Blog
            <sup>
              <span className="ml-1 inline-block w-2 h-2 rounded-full bg-red-500 animate-ping" />
            </sup>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex items-center gap-4 text-2xl">
          {[
            { Icon: FaLinkedin, link: "https://www.linkedin.com/in/brandon-duclerc-tamwa-kamga/" },
            { Icon: FaSquareGithub, link: "https://github.com/brandoniscoding-dev" },
            { Icon: FaSquareXTwitter, link: "https://x.com/Brandoniscoding" },
            { Icon: FaMedium, link: "https://medium.com/@brandoniscoding" }
          ].map(({ Icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="text-stone-300 hover:text-blue-400 transition-all"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
