import {
  SiJavascript,
  SiSpringboot,
  SiHtml5,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiSwagger,
  SiApachemaven,
} from "react-icons/si";

import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa6";

import { FaCss3Alt } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";

export const skills = [
  {
    title: "Programming Languages",
    items: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },

  {
    title: "Frontend",
    items: [
      { name: "React", icon: FaReact },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Bootstrap", icon: BsBootstrap },
    ],
  },

  {
    title: "Backend",
    items: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "REST API", icon: SiSpringboot },
      { name: "JDBC", icon: FaJava },
      { name: "Hibernate", icon: FaJava },
      { name: "Maven", icon: SiApachemaven },
    ],
  },

  {
    title: "Database",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },

  {
    title: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: VscVscode },
      { name: "STS", icon: SiSpringboot },
      { name: "Swagger", icon: SiSwagger },
    ],
  },
];