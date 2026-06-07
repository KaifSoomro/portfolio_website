import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "../../components/common/ProjectCard";
import Container from "../../components/common/Container";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "../../features/projectSlice.js";

const Projects = () => {
  const dispatch = useDispatch();

  const { projects } = useSelector((state) => state.project);

  const { data: getProjects, isLoading } = useQuery({
    queryKey: ["getProjects"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/project/all`,
          {
            method: "GET",
          },
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || data.error);
        }

        dispatch(setProjects(data.projects));
        return data.projects;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  });
  return (
    <div className="w-full p-5 md:p-0">
      <div className="mt-30 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-extrabold uppercase text-3xl md:text-4xl bg-linear-to-t from-orange-500 to-orange-300 bg-clip-text text-transparent"
        >
          Projects
        </motion.h1>
      </div>

      <Container>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 md:mt-20 mt-15">
          {projects &&
            projects?.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
