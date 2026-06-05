import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../features/userSlice";
import toast from "react-hot-toast";
import { LogOut } from "lucide-react";

const Topbar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setUser(null));

    toast.success("Logged out successfull");
  };
  return (
    <div className="bg-[#1e1e1dea] w-full h-17 flex items-center p-5 justify-between">
      <h1 className="text-3xl font-semibold">Dashboard</h1>

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
  );
};

export default Topbar;
