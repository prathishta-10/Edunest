import React, { useState } from "react";
import "./TutorLogin.css"; // Optional: Add custom CSS for styling

function TutorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }

    setError("");

    // Add login logic here (e.g., API call)
    console.log("Logging in with:", { email, password });
    alert("Tutor Login Successful!");
  };

  return (
    <div className="tutor-login-container">
      <h2 className="text-center">Tutor Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Email ID:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success btn-block">
          Login
        </button>
      </form>
    </div>
  );
}

export default TutorLogin;
