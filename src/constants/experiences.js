// constants/experiences.js

import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { SiSpringboot, SiDocker, SiJenkins, SiGithub, SiGit, SiNodedotjs, SiReact, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { FcGoogle } from "react-icons/fc"; // Icône Google Coloré pour GDSC Lead

export const EXPERIENCES = [
  {
    id: 1,
    period: "Sept 2021 - Aug 2022",
    title: "Baccalauréat C - Mention Assez Bien",
    description: "Obtention du Baccalauréat C au Collège FAPO, avec une spécialisation en Mathématiques et Physique.",
    Icon: FaGraduationCap,
    color: "#3B82F6", // Bleu éducation classique
    technologies: [],
  },
  {
    id: 2,
    period: "Sept 2023 - Aug 2024",
    title: "GDSC Lead - Backend",
    description: "Lead technique du pôle backend au Google Developer Student Club (GDSC) de mon université, gestion d'équipes backend, ateliers de formation backend modernes.",
    Icon: FcGoogle,
    color: "#4285F4", // Couleur officielle Google
    technologies: [
      { Icon: SiSpringboot, color: "#6DB33F" },  // Spring Boot
      { Icon: SiNodedotjs, color: "#539E43" },    // Node.js
    ],
  },
  {
    id: 3,
    period: "Apr 2024 - Jun 2024",
    title: "Technical Instructor",
    description: "Formateur technique à Technopole Training School : Cours intensifs HTML, CSS, JavaScript et Node.js pour étudiants et professionnels en reconversion.",
    Icon: FaGraduationCap,
    color: "#10B981", // Vert clair éducation pratique
    technologies: [
      { Icon: SiHtml5, color: "#E34F26" },     // HTML5
      { Icon: SiCss3, color: "#1572B6" },      // CSS3
      { Icon: SiJavascript, color: "#F7DF1E" }, // JS
      { Icon: SiNodedotjs, color: "#539E43" },   // Node.js
    ],
  },
  {
    id: 4,
    period: "Apr 2025 - Present",
    title: "DevOps & Full Stack Developer",
    description: "Développement fullstack moderne (Spring Boot & React) et gestion d'infrastructure DevOps (CI/CD avec Jenkins, Docker, GitHub) chez PropentaTech Saving Solution.",
    Icon: FaBriefcase,
    color: "#8B5CF6", // Violet pour poste professionnel actuel
    technologies: [
      { Icon: SiSpringboot, color: "#6DB33F" },  // Spring Boot
      { Icon: SiReact, color: "#61DBFB" },       // React
      { Icon: SiJenkins, color: "#D33833" },     // Jenkins
      { Icon: SiGithub, color: "#FFFFFF" },      // GitHub
      { Icon: SiGit, color: "#F05032" },         // Git
      { Icon: SiDocker, color: "#0db7ed" },      // Docker
    ],
  }
];
