import { About } from "@components/About";
import { Social } from "@components/Card";
import { Skill } from "@components/Skills";

export interface User {
  name: string;
  title: string;
  social: Social;
  about?: About;
  skills?: Skill[];
}
