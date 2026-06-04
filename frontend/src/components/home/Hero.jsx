import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full mt-20 md:mt-30 flex flex-col items-center justify-center text-center px-5 md:px-5 pt-15">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-1 rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-purple-500"
      >
        {/* Image */}
        <img
          src="/avatar.png"
          alt=""
          className="w-40 md:w-65 rounded-full bg-[#0f0f17]"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w mt-8 text-white font-bold text-4xl md:text-7xl md:leading-18 leading-10 tracking-tight"
      >
        I do code and <br /> make content{" "}
        <span
          className="
          text-transparent 
          bg-linear-to-tl 
        from-purple-600 
        via-pink-400 
        to-orange-500 
          bg-clip-text
          drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]
          hover:drop-shadow-[0_0_18px_rgba(236,72,153,0.7)]
          transition-all duration-300
          animate-pulse
          "
        >
          about it!
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-5 md:mt-10 text-md md:text-xl text-neutral-500 md:w-210 md:leading-8 leading-7"
      >
        Full-stack engineer (3+ years) specializing in backend development. I
        build scalable SaaS systems with clean, high-performance architecture
        and integrate AI into modern applications to deliver smart,
        production-ready solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-5 md:mt-12 flex items-center gap-5"
      >
        <Link
          to="/contact"
          className="bg-white rounded-full px-5 py-2 md:px-8 md:py-3 text-[#161513] md:text-xl font-semibold border border-white hover:bg-[#161513] hover:text-white cursor-pointer transition-all duration-200"
        >
          Get In Touch
        </Link>

        <Link
          to={`${import.meta.env.VITE_BACKEND_URL}/resume/download`}
          target="_blank"
          className="bg-transparent rounded-full px-5 py-2 md:px-8 md:py-3 text-white md:text-xl font-semibold border border-white hover:bg-white hover:text-[#161513] cursor-pointer transition-all duration-200"
        >
          Download CV
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
