import React, { useState } from "react";
import ProjectCard from "../common/ProjectCard";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

const ProjectsComp = () => {
  const [featuredData, setFeaturedData] = useState([]);
  const { data: featuredProjects, isLoading } = useQuery({
    queryKey: ["featuredProjects"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/project/featured`,
          {
            method: "GET",
          },
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || data.error);
        }

        setFeaturedData(data.featuredProjects.length > 2 ? data.featuredProjects.split(0,2) : data.featuredProjects)
        return data.featuredProjects;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  });

  return (
    <div className="mt-10 md:mt-17 flex flex-col items-center justify-center gap-8 px-5">
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-extrabold uppercase text-3xl md:text-4xl bg-linear-to-t from-orange-500 to-orange-300 bg-clip-text text-transparent"
      >
        Projects
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-2 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {featuredData?.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsComp;
