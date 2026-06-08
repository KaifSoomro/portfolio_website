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
import SingleEmail from "./pages/private/SingleEmail";
import SingleProject from "./pages/public/SingleProject";
import Skills from "./pages/public/Skills";

const App = () => {
  const location = useLocation();

  return (
    <>
      {!location.pathname.startsWith("/admin-dashboard") && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<SingleProject />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<div>Page Not Found</div>} />

        {/* Private Routes */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectRoute>
              <AdminDashboard />
            </ProtectRoute>
          }
        >
          <Route path="home" element={<DashboardHome />} />
          <Route path="manage-projects" element={<ManageProjects />} />
          <Route path="new-project" element={<AddProject />} />
          <Route path="emails" element={<ManageEmails />} />
          <Route path="emails/:emailId" element={<SingleEmail />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
