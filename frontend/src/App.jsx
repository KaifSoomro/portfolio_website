import React from "react";
import Navbar from "./components/common/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/public/Home";
import Projects from "./pages/public/Projects";
import Contact from "./pages/public/Contact";
import Login from "./pages/private/Login";
import AdminDashboard from "./pages/private/AdminDashboard";
import ProtectRoute from "./components/auth/ProtectRoute";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Private Routes */}
        <Route path="/admin-dashboard" element={ <ProtectRoute> <AdminDashboard /> </ProtectRoute> }/>
      </Routes>
    </Router>
  );
};

export default App;
