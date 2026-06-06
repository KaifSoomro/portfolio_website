import React from "react";
import Navbar from "./components/common/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/public/Home";
import Projects from "./pages/public/Projects";
import Contact from "./pages/public/Contact";
import Login from "./pages/private/Login";
import AdminDashboard from "./pages/private/AdminDashboard";
import ProtectRoute from "./components/auth/ProtectRoute";
import DashboardHome from "./pages/private/DashboardHome";
import ManageProjects from "./pages/private/ManageProjects";
import ManageEmails from "./pages/private/ManageEmails";
import AddProject from "./pages/private/AddProject";

const App = () => {
  const location = useLocation();

  return (
      <>
        { !location.pathname.startsWith("/admin-dashboard") && <Navbar /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Private Routes */}
        <Route path="/admin-dashboard" element={<ProtectRoute> <AdminDashboard /> </ProtectRoute>}>
          <Route path="home" element={<DashboardHome />} />
          <Route path="manage-projects" element={<ManageProjects />} />
          <Route path="new-project" element={<AddProject />} />
          <Route path="emails" element={<ManageEmails />} />
        </Route>
      </Routes>
      </>
  );
};

export default App;
