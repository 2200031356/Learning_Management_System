import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "ROLE_STUDENT",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    login({
      email: form.email,
      role: form.role,
    });

    if (form.role === "ROLE_STUDENT") {
      navigate("/student-dashboard");
    }

    if (form.role === "ROLE_INSTRUCTOR") {
      navigate("/instructor-dashboard");
    }

    if (form.role === "ROLE_ADMIN") {
      navigate("/admin-dashboard");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-icon">🔐</div>

        <h2>Welcome Back</h2>
        <p className="auth-subtitle">
          Sign in to continue learning
        </p>

        <form className="auth-form" onSubmit={handleLogin}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <select
            name="role"
            onChange={handleChange}
          >
            <option value="ROLE_STUDENT">Student</option>
            <option value="ROLE_INSTRUCTOR">Instructor</option>
            <option value="ROLE_ADMIN">Admin</option>
          </select>

          <button type="submit" className="auth-button">
            Sign In
          </button>
        </form>

        <p className="link-text">
          Don’t have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;