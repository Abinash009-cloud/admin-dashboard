// src/pages/Login.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form.email, form.password);
      navigate("/");
    } catch (err) {
      alert("Invalid login");
    }
  };

  return (
    <div className="login-page">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" onChange={handleChange} placeholder="Email" />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
