// src/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export default function ProtectedRoute({ children, adminOnly }) {
  const { user, role } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (adminOnly && role !== "Admin") return <Navigate to="/" />;

  return children;
}
