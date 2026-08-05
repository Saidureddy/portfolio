import {
  SiJavascript,
  SiTypescript,
  SiSpringboot,
  SiHtml5,
  SiMongodb,
  SiPostman,
  SiSwagger,
  SiApachemaven,
  SiApachekafka,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiNginx,
  SiElasticsearch,
  SiJsonwebtokens,
  SiAngular,
} from "react-icons/si";

import {
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa6";

import {
  FaCss3Alt,
  FaLock,
  FaServer,
  FaBolt,
  FaMicrochip,
  FaCreditCard,
  FaMoneyBillWave,
  FaNetworkWired,
  FaShieldAlt,
  FaCloud,
} from "react-icons/fa";

export const skills = [
  {
    title: "Languages",
    items: [
      { name: "Java 8/17", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },

  {
    title: "Frontend",
    items: [
      { name: "Angular", icon: SiAngular },
      { name: "TypeScript", icon: SiTypescript },
      { name: "RxJS", icon: SiAngular },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
    ],
  },

  {
    title: "Backend & Architecture",
    items: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Spring Security", icon: FaLock },
      { name: "Spring Cloud", icon: SiSpringboot },
      { name: "Microservices", icon: FaServer },
      { name: "REST APIs", icon: SiSwagger },
      { name: "Hibernate / JPA", icon: FaJava },
    ],
  },

  {
    title: "Distributed Systems",
    items: [
      { name: "Kafka", icon: SiApachekafka },
      { name: "Event-Driven Architecture", icon: FaBolt },
      { name: "Virtual Threads & Concurrency", icon: FaMicrochip },
    ],
  },

  {
    title: "Payments",
    items: [
      { name: "ISO 8583", icon: FaNetworkWired },
      { name: "UPI", icon: FaCreditCard },
      { name: "Payment Gateway", icon: FaCreditCard },
      { name: "Settlement & Reconciliation", icon: FaMoneyBillWave },
    ],
  },

  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "Elasticsearch", icon: SiElasticsearch },
    ],
  },

  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: FaCloud },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Jenkins", icon: SiJenkins },
      { name: "Nginx", icon: SiNginx },
    ],
  },

  {
    title: "Security",
    items: [
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "AES / RSA", icon: FaLock },
      { name: "SSL/TLS", icon: FaShieldAlt },
    ],
  },

  {
    title: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Maven", icon: SiApachemaven },
      { name: "Postman", icon: SiPostman },
      { name: "JUnit", icon: FaJava },
    ],
  },
];
