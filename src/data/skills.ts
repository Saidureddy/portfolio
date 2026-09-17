import {
  SiJavascript,
  SiSpringboot,
  SiSpringsecurity,
  SiHtml5,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiSwagger,
  SiApachemaven,
  SiDocker,
} from "react-icons/si";

import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaNetworkWired,
  FaRobot,
  FaBrain,
  FaDatabase,
} from "react-icons/fa6";

import { FaCss3Alt } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";

import { VscVscode } from "react-icons/vsc";

export const skills = [
  {
    title: "Programming Languages",
    items: [
      { name: "Java 17", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "SQL", icon: SiMysql },
    ],
  },

  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: FaReact },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Bootstrap", icon: BsBootstrap },
    ],
  },

  {
    title: "Backend",
    items: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Spring MVC", icon: SiSpringboot },
      { name: "Spring Security", icon: SiSpringsecurity },
      { name: "Microservices", icon: FaNetworkWired },
      { name: "JDBC", icon: FaJava },
      { name: "Hibernate", icon: FaJava },
      { name: "Maven", icon: SiApachemaven },
    ],
  },

  {
    title: "APIs",
    items: [
      { name: "REST APIs", icon: SiSwagger },
      { name: "RESTful Web Services", icon: SiSwagger },
      { name: "API Integration", icon: SiSwagger },
    ],
  },

  {
    title: "Database",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PGVector", icon: FaDatabase },
    ],
  },

  {
    title: "AI / GenAI",
    items: [
      { name: "Spring AI", icon: FaRobot },
      { name: "LLM Integration", icon: FaBrain },
      { name: "RAG", icon: FaBrain },
      { name: "Embeddings", icon: FaBrain },
      { name: "Vector Database", icon: FaDatabase },
    ],
  },

  {
    title: "Data Structures & Algorithms",
    items: [
      { name: "Data Structures", icon: FaCode },
      { name: "Algorithms", icon: FaCode },
    ],
  },

  {
    title: "Methodologies",
    items: [
      { name: "Agile", icon: FaCode },
      { name: "SDLC", icon: FaCode },
    ],
  },

  {
    title: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Docker", icon: SiDocker },
      { name: "VS Code", icon: VscVscode },
      { name: "STS", icon: SiSpringboot },
      { name: "Swagger", icon: SiSwagger },
    ],
  },
];
