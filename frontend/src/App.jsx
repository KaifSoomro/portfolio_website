import React, { lazy, Suspense } from "react";
import Navbar from "./components/common/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";

const Home = lazy(() => import("./pages/public/Home"));
const Projects = lazy(() => import("./pages/public/Projects"));
const Contact = lazy(() => import("./pages/public/Contact"));
const Login = lazy(() => import("./pages/private/Login"));
const AdminDashboard = lazy(() => import("./pages/private/AdminDashboard"));
const DashboardHome = lazy(() => import("./pages/private/DashboardHome"));
const ManageProjects = lazy(() => import("./pages/private/ManageProjects"));
const ManageEmails = lazy(() => import("./pages/private/ManageEmails"));
const AddProject = lazy(() => import("./pages/private/AddProject"));
const SingleEmail = lazy(() => import("./pages/private/SingleEmail"));
const SingleProject = lazy(() => import("./pages/public/SingleProject"));
const Skills = lazy(() => import("./pages/public/Skills"));

const App = () => {
  const location = useLocation();

  return (
    <>
      {!location.pathname.startsWith("/admin-dashboard") && <Navbar />}

      <Suspense
        fallback={
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        }
      >
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
      </Suspense>
    </>
  );
};

export default App;