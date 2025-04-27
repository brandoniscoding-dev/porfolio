import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiDocker, SiMongodb, SiSpringboot, SiTailwindcss, SiGit } from "react-icons/si";

export const PROJECTS = [
  {
    title: "Snake Game",
    description: "A fast-paced and addictive browser game where players control a growing snake, demonstrating real-time interactions and dynamic user experience.",
    image: "",
    githubLink: "https://github.com/brandoniscoding/snake-game",
    liveLink: "",
    technologiesIcons: [
      { Icon: RiReactjsLine, color: "#61DBFB" },
      { Icon: SiTailwindcss, color: "#38BDF8" },
      { Icon: SiGit, color: "#F1502F" },
      { Icon: FaGithub, color: "#ffffff" },
    ],
  },
  {
    title: "Task Manager",
    description: "A task management platform designed to streamline teamwork and boost productivity.",
    image: "",
    githubLink: "https://github.com/brandoniscoding/task-manager",
    liveLink: "",
    technologiesIcons: [
      { Icon: FaNodeJs, color: "#68A063" },
      { Icon: RiReactjsLine, color: "#61DBFB" },
      { Icon: SiGit, color: "#F1502F" },
      { Icon: FaGithub, color: "#ffffff" },
      { Icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "WA AI-REPLY",
    description: "A smart browser extension that assists users in writing and replying to WhatsApp messages more efficiently, powered by artificial intelligence for enhanced speed and quality.",
    image: "",
    githubLink: "https://github.com/brandoniscoding/wa-reply-extension",
    liveLink: "",
    technologiesIcons: [
      { Icon: FaHtml5, color: "#e34c26" },
      { Icon: FaCss3Alt, color: "#264de4" },
      { Icon: SiJavascript, color: "#f0db4f" },
      { Icon: FaNodeJs, color: "#68A063" },
      { Icon: SiMongodb, color: "#47A248" },
      { Icon: SiGit, color: "#F1502F" },
      { Icon: FaGithub, color: "#ffffff" },
      { Icon: SiDocker, color: "#0db7ed" },
    ],
  },
  {
    title: "MailOps",
    description: "An intelligent Gmail assistant browser extension that helps users draft and respond to emails faster and smarter, powered by artificial intelligence for optimized email productivity.",
    image: "",
    githubLink: "https://github.com/brandoniscoding/mailops",
    liveLink: "",
    technologiesIcons: [
      { Icon: SiSpringboot, color: "#6DB33F" },
      { Icon: FaHtml5, color: "#e34c26" },
      { Icon: FaCss3Alt, color: "#264de4" },
      { Icon: SiJavascript, color: "#f0db4f" },
      { Icon: SiGit, color: "#F1502F" },
      { Icon: FaGithub, color: "#ffffff" },
      { Icon: SiDocker, color: "#0db7ed" },
      { Icon: SiMongodb, color: "#47A248" },
    ],
  },
];
