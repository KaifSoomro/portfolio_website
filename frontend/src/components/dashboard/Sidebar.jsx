import React from "react";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FolderBookmark, Mail } from "lucide-react";
import { useSelector } from "react-redux";

const Sidebar = () => {

  const { user } = useSelector(state => state.user);
  const letter = user.userName[0]

  const linkClass = ({ isActive }) => `
  flex items-center gap-2 text-xl transition-all duration-100 rounded-lg ps-3 py-2 
  ${isActive ? "bg-purple-700/15 text-purple-200" : "hover:bg-purple-700/15 hover:text-purple-200"}
  `;

  return (
    <div className="w-80 h-screen bg-[#1e1e1dea] border-r border-neutral-500/30 p-6 hidden md:flex flex-col">
      <img src="/kaif.png" alt="" className="w-30 ps-3" />

      <div className="mt-20 flex flex-col justify-center gap-2">
        <NavLink to={"home"} className={linkClass}>
          <RxDashboard size={22} /> Dashboard
        </NavLink>

        <NavLink to={"manage-projects"} className={linkClass}>
          <FolderBookmark size={22} /> Projects
        </NavLink>

        <NavLink to={"emails"} className={linkClass}>
          <Mail size={22} /> Emails
        </NavLink>
      </div>

      <div className="bg-[#151514ea] w-full h-17 rounded-lg mt-auto flex items-center px-3 gap-3.5">
        <div className="w-12 h-12 flex items-center justify-center bg-purple-500/25 text-purple-300 rounded-full">
            <h1 className="uppercase"> { letter } </h1>
        </div>

        <div>
            <h1 className="text-sm font-semibold">{ user.email }</h1> 
            <h1 className="text-xs tracking-wider text-neutral-500">{ user.userName }</h1> 
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
