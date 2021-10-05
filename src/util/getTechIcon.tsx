import { Technology } from "@interfaces/Technologies";

const {
  SiNestjs,
  SiReact,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiDialogflow,
} = require("react-icons/si");

const ICON_STYLE = "text-4xl mx-auto inline-block";

export const getTechIcon = (tech: Technology): JSX.Element => {
  switch (tech) {
    case "REACT":
      return <SiReact className={ICON_STYLE} />;
    case "NEXTJS":
      return <SiNextdotjs className={ICON_STYLE} />;
    case "NESTJS":
      return <SiNestjs className={ICON_STYLE} />;
    case "TYPESCRIPT":
      return <SiTypescript className={ICON_STYLE} />;
    case "DIALOGFLOW":
      return <SiDialogflow className={ICON_STYLE} />;
    case "FIREBASE":
      return <SiFirebase className={ICON_STYLE} />;
  }
};
