import { Technology } from "@interfaces/Technologies";
import { User } from "@interfaces/User";

export const user = {
  name: "Antony Giomar",
  title: "Fullstack Developer",
  social: {
    github: "https://github.com/antonygiomarx",
    twitter: "https://github.com/antonygiomarx",
    email: "antonygiomarx@gmail.com",
  },
  about: {
    title: "My Background",
    description:
      "I have more than four years of experience working as a developer. Currently, I work as a Bot Developer at @atomchat; I work with a multidisciplinary team, creating unique products that help people achieve their goals through professional and scalable services. I am deeply passionate about creating beloved and trusted products that help people achieve their goals.",
  },
  skills: [
    {
      name: "ReactJS",
      skill: Technology.REACT,
    },
    {
      name: "NextJS",
      skill: Technology.NEXTJS,
    },
    {
      name: "Nestjs",
      skill: Technology.NESTJS,
    },
    {
      name: "Firebase",
      skill: Technology.FIREBASE,
    },
    {
      name: "Typescript",
      skill: Technology.TYPESCRIPT,
    },
    {
      name: "Dialogflow",
      skill: Technology.DIALOGFLOW,
    },
  ],
} as User;

interface Project {
  name: string;
  url: string;
  imageUrl: string;
  description: string;
}

export const projects = [
  {
    name: "Mi Ventecita",
    description:
      "E-Commerce pensado para la administración de negocios pequeños.",
    imageUrl: "",
    url: "https://github.com/antonygiomarx/mi_ventecita",
  },
  {
    name: "Backend TODO App",
    description: "",
    imageUrl: "",
    url: "https://github.com/antonygiomarx/todo-app-docker-nestjs-postgres-swagger-jwt-prisma",
  },
] as Project[];
