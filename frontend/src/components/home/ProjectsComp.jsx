import React from "react";
import ProjectCard from "../common/ProjectCard";

const ProjectsComp = () => {
    const featuredData = [
        {
            title: "AI Online Assessment Platform",
            subTitle: "Open AI + SaaS Idea",
            isFeatured: true,
            image: "https://media.licdn.com/dms/image/v2/D5612AQFvmDC_K0j1_w/article-cover_image-shrink_720_1280/B56Zgihu4vHkAI-/0/1752925925692?e=2147483647&v=beta&t=aw-4OYnrRDimK-bOl-HM_FVz1uP154QXbviDDIL1At4"
        },
        {
            title: "Scalable E-Commerce Application",
            subTitle: "Full-Stack E-Com Website",
            isFeatured: true,
            image: "https://miro.medium.com/1*VNoETQG1aBwujmj9qMBbLQ.png"
        }
    ]
  return (
    <div className="mt-10 md:mt-17 flex flex-col items-center justify-center gap-8 px-5">

      <h1 className="font-extrabold uppercase text-3xl md:text-4xl bg-linear-to-t from-orange-500 to-orange-300 bg-clip-text text-transparent">
        Projects
      </h1>

      <div className="mt-2 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {
            featuredData.map((project, index) => (
                <ProjectCard key={index} project={project}/>
            ))
        }
      </div>  
    </div>
  );
};

export default ProjectsComp;
