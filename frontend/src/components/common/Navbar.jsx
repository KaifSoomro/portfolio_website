import React from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-[#1e1e1d] flex items-center justify-around">
      <h1 className="me-20 text-4xl font-bold text-purple-400">Kaif</h1>
      <div className="flex items-center gap-20 ms-20">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg font-semibold transition-all duration-200 ${
              isActive
                ? "text-transparent bg-linear-to-t from-pink-600 to-pink-200 bg-clip-text"
                : "text-white hover:text-transparent hover:bg-linear-to-t hover:from-pink-600 hover:to-pink-200 hover:bg-clip-text"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `text-lg font-semibold transition-all duration-200 ${
              isActive
                ? "text-transparent bg-linear-to-t from-pink-600 to-pink-200 bg-clip-text"
                : "text-white hover:text-transparent hover:bg-linear-to-t hover:from-pink-600 hover:to-pink-200 hover:bg-clip-text"
            }`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            `text-lg font-semibold transition-all duration-200 ${
              isActive
                ? "text-transparent bg-linear-to-t from-pink-600 to-pink-200 bg-clip-text"
                : "text-white hover:text-transparent hover:bg-linear-to-t hover:from-pink-600 hover:to-pink-200 hover:bg-clip-text"
            }`
          }
        >
          Experience
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-lg font-semibold transition-all duration-200 ${
              isActive
                ? "text-transparent bg-linear-to-t from-pink-600 to-pink-200 bg-clip-text"
                : "text-white hover:text-transparent hover:bg-linear-to-t hover:from-pink-600 hover:to-pink-200 hover:bg-clip-text"
            }`
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
