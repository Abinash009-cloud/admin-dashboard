// src/components/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Users } from "lucide-react"; // or any icons


const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <h2 className="logo">Admin Dash</h2>
      <nav>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <Home size={20} /> Dashboard
        </Link>
        <Link to="/users" className={location.pathname === "/users" ? "active" : ""}>
          <Users size={20} /> Users
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar; // ✅ This line is MANDATORY
