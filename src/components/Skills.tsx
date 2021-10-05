import { Technology } from "@interfaces/Technologies";
import { nanoid as uuid } from "nanoid";

import SkillCard from "./SkillCard";

export interface Skill {
  name: string;
  icon?: JSX.Element;
  skill?: Technology;
}

function Skills({ skills }: { skills: Skill[] }) {
  return (
    <div className="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto">
      {skills.map((skill) => {
        return <SkillCard key={uuid()} name={skill.name} skill={skill.skill} />;
      })}
    </div>
  );
}

export default Skills;
