// components/Contact.jsx
import { CONTACT } from "../constants/contact";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="border-t border-stone-900 py-16 px-6 max-w-3xl mx-auto text-center">
      {/* Titre principal */}
      <motion.h2
        className="text-4xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>

      {/* Infos Contact */}
      <div className="tracking-tighter text-stone-400 space-y-4 mb-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {CONTACT.address}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {CONTACT.phoneNo}
        </motion.p>

        <motion.a
          href={`mailto:${CONTACT.email}`}
          className="text-blue-400 hover:underline block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {CONTACT.email}
        </motion.a>
      </div>

      {/* Bouton WhatsApp uniquement */}
      <motion.a
        href="https://wa.me/237620510564" // <-- Remplace ton lien WhatsApp ici
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-3 text-stone-300 border border-stone-700 px-6 py-3 rounded-full hover:bg-green-500 hover:text-white transition-all"
      >
        <FaWhatsapp className="text-2xl" />
        Contact via WhatsApp
      </motion.a>
    </section>
  );
};

export default Contact;
