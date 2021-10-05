import { User } from "@interfaces/User";

const {
  SiNestjs,
  SiReact,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiDialogflow,
} = require("react-icons/si");

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";

export const data = {
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
      icon: <SiReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      name: "NextJS",
      icon: <SiNextdotjs className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      name: "Nestjs",
      icon: <SiNestjs className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      name: "Dialogflow",
      icon: <SiDialogflow className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
} as unknown as User;
