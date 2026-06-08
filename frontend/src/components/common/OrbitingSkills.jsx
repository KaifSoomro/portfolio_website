import React from "react";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiSocketdotio } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaJsSquare } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiGooglegemini } from "react-icons/si";
import { Link } from "react-router-dom";

const icons = [
  BiLogoMongodb,
  FaNodeJs,
  SiExpress,
  FaReact,
  SiSocketdotio,
  SiGooglegemini,
  FaJsSquare,
  BiLogoTypescript,
  RiNextjsFill,
  FaGit,
];

const colors = [
  "text-green-600",
  "text-green-500",
  "text-white",
  "text-blue-400",
  "text-gray-300",
  "text-pink-500",
  "text-yellow-500",
  "text-blue-400",
  "text-neutral-300",
  "text-red-400",
];

const links = [
  "https://www.mongodb.com/",
  "https://nodejs.org/en",
  "https://expressjs.com/en/",
  "https://react.dev/",
  "https://socket.io/",
  "https://aistudio.google.com/welcome?utm_source=google&utm_medium=cpc&utm_campaign=Cloud-SS-DR-AIS-FY26-global-gsem-1713578&utm_content=text-ad&utm_term=KW_google%20ai%20studio&gad_source=1&gad_campaignid=23417416052&gbraid=0AAAAACn9t66D1SBtpKvMoI9d_ORYS__Jf&gclid=Cj0KCQjw0JnRBhDJARIsALobnXZqiTqIaXP5JIm_db8gE60pBd8I8-OoEN-QRBWW17IelYqQm6oed3gaAs7gEALw_wcB",
  "",
  "https://www.typescriptlang.org/",
  "https://nextjs.org/",
  "https://git-scm.com/"
];

const radius = typeof window !== "undefined" && window.innerWidth < 768 ? 130 : 250;

const OrbitingSkills = () => {
  return (
    <div className="relative w-full md:h-175 h-100 flex items-center justify-center overflow-hidden rounded-3xl">
      <div className="absolute md:w-120 md:h-120 h-60 w-60 bg-purple-500/10 blur-3xl rounded-full" />
      <div className="absolute md:w-92.5 md:h-92.5 w-35 h-35 bg-pink-500/10 blur-3xl rounded-full" />
      
      <div className="md:w-36 md:h-36 w-25 h-25 rounded-full bg-linear-to-br from-purple-600 via-fuchsia-500 to-pink-500 shadow-[0_0_80px_rgba(168,85,247,0.8)] z-10" />

      <div className="absolute md:w-110 md:h-110 w-50 h-50 flex items-center justify-center animate-spin-slow">
        {icons.map((Icon, index) => {
          const angle = (index / icons.length) * 360;

          return (
            <div
              key={index}
              className="absolute"
              style={{
                transform: `
                  rotate(${angle}deg)
                  translate(${radius}px)
                `,
              }}
            >
              <a
                href={links[index]}
                target="_blank"
                className="md:w-18 md:h-18 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-purple-400/30 shadow-lg"
              >
                <Icon className={`${colors[index]} md:w-10 md:h-10 w-8 h-8`} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrbitingSkills;
