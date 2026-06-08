import React from "react";
import OrbitingSkills from "../common/OrbitingSkills";
import { motion } from "framer-motion";

const SkillsComp = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-extrabold uppercase text-3xl md:text-5xl bg-linear-to-t from-purple-800 to-pink-400 bg-clip-text text-transparent mt-30 md:mt-40"
      >
        My Skills
      </motion.h1>
      <OrbitingSkills />
    </div>
  );
};

export default SkillsComp;
