import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children, adminOnly = true }) => {
  const { user } = useSelector(state => state.user);

  if(!user){
    return <Navigate to={"/"}/>
  }

  if(adminOnly && user.role !== "admin"){
    return <Navigate to={"/"}/>
  }

  return children;
};

export default ProtectRoute;