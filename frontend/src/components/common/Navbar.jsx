import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-2xl md:text-lg transition-all duration-200 ${
      isActive
        ? "text-transparent bg-linear-to-t from-pink-600 to-pink-200 bg-clip-text"
        : "text-white hover:text-transparent hover:bg-linear-to-t hover:from-pink-600 hover:to-pink-200 hover:bg-clip-text"
    }`;

  return (
    <div className="fixed top-0 w-full h-17 md:h-20 bg-[#1e1e1dea] backdrop-blur-sm flex items-center justify-between px-5 md:px-10 z-50">
      {/* Logo */}
      <div className="w-300 mx-auto flex items-center justify-between">
        <Link to="/">
          <img src="/kaif.png" alt="logo" className="w-24 md:w-30" />
        </Link>

        <div className="hidden md:flex items-center gap-20">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/experience" className={linkClass}>
            Experience
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white"
        >
          <Menu size={30} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#1e1e1d] flex flex-col items-center justify-center gap-10 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden text-white absolute top-10 right-10"
        >
          <X size={40} />
        </button>

        <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={linkClass}
          onClick={() => setIsOpen(false)}
        >
          Projects
        </NavLink>
        <NavLink
          to="/experience"
          className={linkClass}
          onClick={() => setIsOpen(false)}
        >
          Experience
        </NavLink>
        <NavLink
          to="/contact"
          className={linkClass}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
