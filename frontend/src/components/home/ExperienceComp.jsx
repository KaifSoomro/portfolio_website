import React from "react";
import Container from "../common/Container";
import { motion } from "framer-motion";

const ExperienceComp = () => {
  return (
    <div id="experience" className="mt-10 md:mt-18 flex flex-col items-center justify-center gap-8 px-5">
      <motion.h1 initial={{ opacity: 0, y:15 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration: 0.5, delay: 0.2 }} className="font-extrabold uppercase text-3xl md:text-4xl bg-linear-to-t from-blue-500 to-blue-300 bg-clip-text text-transparent">
        Experience
      </motion.h1>

      <Container>
        <motion.div initial={{ opacity: 0, y:15 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <div className="mt-3 md:mt-0 text-white md:text-2xl flex flex-col md:flex-row items-start md:items-center justify-between">
            <h1 className="flex items-center gap-5 md:gap-8">
              <span>
                <img src="/exp-img.png" alt="" width={50} loading="lazy" />
              </span>{" "}
              Full-Stack Developer at Xolvexis Solutions
            </h1>
            <p className="mt-3 md:mt-6 text-sm md:text-lg text-neutral-500">Dec 2025 - May 2026 | 6 Months</p>
          </div>

          <p className="mt-6 text-lg text-neutral-500">
            As a Full Stack Developer at Xolvexis, I worked on developing and
            maintaining modern web applications using the MERN stack. My
            responsibilities included building responsive user interfaces,
            creating RESTful APIs, managing databases, implementing
            authentication and authorization systems, and optimizing application
            performance. Working in a remote team environment, I collaborated on
            delivering scalable, reliable, and user-focused solutions for
            clients while following industry best practices and clean code
            principles.
          </p>
        </motion.div>
      </Container>
    </div>
  );
};

export default ExperienceComp;
