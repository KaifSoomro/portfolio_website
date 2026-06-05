import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LogOut, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../features/userSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const linkClass = ({ isActive }) =>
    `text-2xl md:text-lg transition-all duration-200 ${
      isActive
        ? "text-transparent bg-linear-to-t from-pink-600 to-pink-200 bg-clip-text"
        : "text-white hover:text-transparent hover:bg-linear-to-t hover:from-pink-600 hover:to-pink-200 hover:bg-clip-text"
    }`;

    const handleLogout = () => {
      dispatch(setUser(null));

      toast.success("Logged out successfull");
    }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="fixed top-0 w-full h-17 md:h-20 bg-[#1e1e1dea] backdrop-blur-sm flex items-center justify-between px-5 md:px-10 z-50"
    >
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
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="text-white hover:text-transparent hover:bg-linear-to-t hover:from-pink-600 hover:to-pink-200 hover:bg-clip-text text-2xl md:text-lg transition-all duration-200 cursor-pointer"
          >
            Experience
          </Link>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

          {user && user.role === "admin" && (
            <NavLink to="/admin-dashboard" className={linkClass}>
              Dashboard
            </NavLink>
          )}

          {user && user.role === "admin" && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-6 py-2 text-white border border-red-500 rounded-md
            hover:bg-red-500 hover:shadow-[0_0_25px_rgba(255,0,0,0.8)] transition-all"
            >
              <LogOut size={18} />
              Logout
            </button>
          )}
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
        <Link
          to="experience"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-transparent hover:bg-linear-to-t hover:from-pink-600 hover:to-pink-200 hover:bg-clip-text text-2xl md:text-lg transition-all duration-200 cursor-pointer"
        >
          Experience
        </Link>
        <NavLink
          to="/contact"
          className={linkClass}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </NavLink>
      </div>
    </motion.div>
  );
};

export default Navbar;
