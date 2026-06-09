import React from "react";
import { SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const ProjectCard = ({ project }) => {
  const { mutate: addViews } = useMutation({
    mutationFn: async (projectId) => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/project/increase-views`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ projectId }),
          },
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || data.error);
        }

        return data;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  });

  return (
    <Link
      to={`/projects/${project?._id}`}
      onClick={() => addViews(project?._id)}
      className="group relative block w-full max-w-125"
    >
      <div className="relative overflow-hidden rounded-2xl bg-[#111111] transition-all duration-500">
        <img
          src={project?.images?.[0]?.url}
          alt={project?.title}
          loading="lazy"
          className="aspect-16/10 w-full object-cover transition-transform duration-400 group-hover:scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
          <div className="flex items-end justify-between gap-3">
            <div className="min-w-0">
              {project?.isFeatured && (
                <p className="mb-1 text-xs sm:text-sm text-purple-300">
                  Featured Project
                </p>
              )}

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white line-clamp-1">
                {project?.title}
              </h2>

              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-300 line-clamp-2 max-w-sm">
                {project?.subTitle}
              </p>
            </div>

            <div className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl transition-all duration-300 group-hover:bg-white group-hover:text-black">
              <SquareArrowOutUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:size-5 md:size-6"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
