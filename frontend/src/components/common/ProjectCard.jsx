import React from "react";
import { SquareArrowOutUpRight } from "lucide-react"

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w md:w-120 rounded-xl md:rounded-2xl shadow-lg relative group overflow-hidden">
      <img src={project.image} alt="" className="rounded-xl md:rounded-2xl group-hover:scale-105 transition-all duration-200" />

      <div className="bg-[#1e1e1d] w-full h-15 md:h-23 rounded-b-xl md:rounded-b-2xl absolute bottom-0 px-5 flex items-center justify-between">
        <div>
          <h1 className="font-semibold md:text-xl">{project.title}</h1>
          <h2 className="hidden md:block md:text-lg mt-1 text-neutral-500">
            {" "}
            {project.subTitle}{" "}
          </h2>
        </div>
        <SquareArrowOutUpRight />
      </div>

      {project.isFeatured && (
        <div className="absolute top-5 right-5 px-3 py-1 bg-black rounded-2xl text-sm bg-linear-to-t from-purple-600 to-pink-400">
          {" "}
          Featured{" "}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
