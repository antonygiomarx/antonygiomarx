import { getTechIcon } from "@util/getTechIcon";
import { Skill } from "./Skills";

const SkillCard = ({ name, skill }: Skill) => {
  const icon = getTechIcon(skill);

  return (
    <div className="m-2 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
      {icon}
      <p className="text-xl font-semibold mt-4">{name}</p>
    </div>
  );
};

export default SkillCard;
