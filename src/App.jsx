import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Sidebar />
          <div className="main-content">
            <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />

              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/orders"
                element={
                  <ProtectedRoute adminOnly>
                    <Orders />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/users"
                element={
                  <ProtectedRoute adminOnly>
                    <Users />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
