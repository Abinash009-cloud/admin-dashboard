// src/components/Navbar.jsx
import React from "react";


const Navbar = () => {
  return (
    <header className="navbar">
      <h1>Admin Dashboard</h1>
      <div className="profile">
        <img src="https://i.pravatar.cc/40" alt="profile" />
      </div>
    </header>
  );
};

export default Navbar; // ✅ This must exist
