import Image from "next/image";
import { FaGithub, FaTwitter, FaRegEnvelope } from "react-icons/fa";

import { User } from "@interfaces/User";

export interface Social {
  github: string;
  twitter: string;
  email: string;
}

function Card({ name, title, social }: User) {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <Image
            className="w-32 mx-auto shadow-xl rounded-full"
            src="/assets/images/profile.jpg"
            alt="Profile face"
            width="280px"
            height="280px"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">
            {name}
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            {title}
          </p>
          <div className="flex align-center justify-center mt-4">
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href={social.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              <span className="sr-only">Github</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
              href={social.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${social.email}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaRegEnvelope />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
