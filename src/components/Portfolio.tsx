import { UserRepository } from "@interfaces/User";
import { fetcher } from "@services/fetcher.service";
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import Image from "next/image";
import { FaGithub, FaRegEnvelope, FaTwitter } from "react-icons/fa";
import useSWR from "swr";

interface CardProjectProps {
  title: string;
  bgImage: string;
  description: string;
  technologies: [];
  url: string;
}

function CardProject({
  title,
  bgImage,
  description,
  technologies,
  url,
}: CardProjectProps) {
  return (
    <div className="w-full flex-1">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <img
            className="w-32 mx-auto shadow-xl rounded-full"
            src={
              "https://github.com/antonygiomarx/react-tailwind-portfolio/raw/main/demo.png"
            }
            alt="Profile face"
            width="280px"
            height="280px"
          />
        </div>
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
  const {
    data: repositories,
    error,
    isValidating,
  } = useSWR<UserRepository[]>(
    "https://api.github.com/users/antonygiomarx/repos",
    fetcher
  );

  if (isValidating) {
    return <h1>"loading..."</h1>;
  }
  console.log(repositories);

  return (
    <div className="mx-auto mt-16 max-w-full w-full h-full">
      <p className="text-2xl md:text-4xl font-bold text-center">Projects</p>
      <section className="m-4 grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 sm:grid-rows-6 md:grid-rows-4 lg:grid-rows-3">
        {repositories.map(({ description, html_url, id, name }) => (
          <CardProject
            description={description}
            bgImage=""
            title={name}
            url={html_url}
            key={id}
            technologies={[]}
          />
        ))}
      </section>
    </div>
  );
}

export default Portfolio;
