import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Container from "../../components/common/Container";
import { ArrowLeft, ArrowRight, LinkIcon } from "lucide-react";
import ChangeDateFormat from "../../utils/ChangeDateFormat";
import { FaGithub } from "react-icons/fa";
import ContactFooter from "../../components/home/ContactFooter";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const SingleProject = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const navigate = useNavigate();

  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/project/single/${projectId}`,
          {
            method: "GET",
          },
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || data.error);
        }

        setProject(data.project);
        return data.project;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  });

  if (imageIndex >= 5) {
    setImageIndex(0);
  } else if (imageIndex < 0) {
    setImageIndex(4);
  }

  return (
    <>
      <div className="w-full md:mt-40 mt-20 p-5 rounded-lg">
        <Container>
          <div className="w-full md:h-150 relative overflow-hidden">
            {/* main img */}
            <Zoom>
              <img
                src={project?.images[imageIndex]?.url}
                alt=""
                className="w-max object-cover rounded-lg"
              />
            </Zoom>

            <button
              onClick={() => setImageIndex(imageIndex + 1)}
              className="absolute md:right-10 md:bottom-30 w-10 h-10 right-5 bottom-0 md:w-17 md:h-17 rounded-full bg-neutral-500/50 text-white flex items-center justify-center cursor-pointer hover:scale-105 duration-200 transition-all hover:bg-neutral-500/60 backdrop-blur-sm border border-neutral-500/40 active:scale-95"
            >
              <ArrowRight />
            </button>

            <button
              onClick={() => setImageIndex(imageIndex - 1)}
              className="absolute md:left-10 md:bottom-30 w-10 h-10 left-5 bottom-0 md:w-17 md:h-17  rounded-full bg-neutral-500/50 text-white flex items-center justify-center cursor-pointer hover:scale-105 duration-200 transition-all hover:bg-neutral-500/60 backdrop-blur-sm border border-neutral-500/40 active:scale-95"
            >
              <ArrowLeft />
            </button>
          </div>

          <div className="mt-10">
            <div className="w-full flex flex-col md:flex-row justify-between">
              <div>
                <h1 className="md:text-4xl text-3xl font-semibold mb-3">
                  {project?.title}
                </h1>
                <h1 className="md:text-4xl text-2xl">{project?.subTitle}</h1>
              </div>
              <div>
                <p className="text-lg text-neutral-500 text-start md:text-end mt-4 md:mt-0">
                  Created on: {ChangeDateFormat(project?.createdAt)}
                </p>
                <div className="mt-3">
                  <span className="px-3 py-1 capitalize rounded-full bg-green-500/10 border border-green-500/30 text-green-500">
                    {project?.status}
                  </span>
                  {project?.isFeatured && (
                    <span className="px-3 py-1 capitalize rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 mx-3">
                      Featured
                    </span>
                  )}
                  <span className="px-3 py-1 capitalize rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400">
                    {project?.category}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-neutral-500 text-lg mt-5">
              {project?.description}
            </p>

            <h1 className="text-3xl mt-8 mb-3">Tech Stack</h1>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-6 md:gap-10">
              {project?.techStack.map((tech, index) => (
                <p
                  key={index}
                  className="px-4 py-1 text-pink-100 border border-pink-500/30 bg-pink-600/10 rounded-lg text-lg mt-4"
                >
                  {tech}
                </p>
              ))}
            </div>

            <div>
              <h1 className="text-3xl mt-10 mb-4">Links</h1>
              <div>
                <button
                  disabled={project?.liveUrl.length === 0 && true}
                  onClick={() => navigate(project?.liveUrl)}
                  className={`flex items-center gap-2 cursor-pointer text-lg ${project?.liveUrl.length === 0 ? "text-blue-500/50" : "text-blue-500"}`}
                >
                  <LinkIcon />
                  {project?.liveUrl
                    ? project?.liveUrl
                    : "No live link provided yet."}
                </button>

                <button
                  disabled={project?.githubUrl.length === 0 && true}
                  onClick={() => navigate(project?.githubUrl)}
                  className={`flex items-center gap-2 mt-3 cursor-pointer text-lg ${project?.githubUrl.length === 0 ? "text-blue-500/50" : "text-blue-500"}`}
                >
                  <FaGithub />
                  {project?.githubUrl
                    ? project?.githubUrl
                    : "No github link provided yet."}
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <ContactFooter />
    </>
  );
};

export default SingleProject;
