import React, { useEffect } from "react";
import SkillsComp from "../../components/skills/SkillsComp";
import ContactFooter from "../../components/home/ContactFooter";

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SkillsComp />
      <ContactFooter />
    </div>
  );
};

export default Skills;
