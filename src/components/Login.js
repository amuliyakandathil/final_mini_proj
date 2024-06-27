// src/components/Login.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../Styles/Login.css"; // Ensure this path is correct

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const isAuthenticated = true;

    if (isAuthenticated) {
      navigate("/profile"); // Redirect to profile page
    }
  };

  return (
    <div className="login-section">
      <h1>Login Page</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Health ID:</label>
          <input type="text" placeholder="Enter your Health ID" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
