import { nanoid as uuid } from "nanoid";
import { FaGithub } from "react-icons/fa";

import { projects } from "@config/user";
interface CardProjectProps {
  title: string;
  bgImage: string;
  description: string;
  technologies: [];
  url: string;
}

const defaultImageUrl =
  "https://github.com/antonygiomarx/react-tailwind-portfolio/raw/main/demo.png";

function CardProject({
  title,
  bgImage,
  description,
  technologies,
  url,
}: CardProjectProps) {
  return (
    <div className="w-64 h-full m-4">
      <div className="flex flex-col mt-3 justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        {bgImage && (
          <div className="">
            <img
              className="w-32 mx-auto shadow-xl rounded-full"
              src={bgImage}
              alt="Profile face"
              width="280px"
              height="280px"
            />
          </div>
        )}
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 hover:text-gray-800">
            {title}
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            {description}
          </p>
          <div className="flex align-center justify-center mt-4">
            <span className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300">
              <a href={url} target="_blank">
                <FaGithub />
                <span className="sr-only">Github</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="m-4">
      <p className="text-2xl md:text-4xl font-bold text-center">Projects</p>
      <section className="flex flex-wrap items-center justify-center">
        {projects.map(({ description, name, imageUrl, url }) => (
          <CardProject
            description={description}
            bgImage={imageUrl}
            title={name}
            url={url}
            key={uuid()}
            technologies={[]}
          />
        ))}
      </section>
    </div>
  );
}

export default Portfolio;
