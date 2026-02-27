import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="nav-container">

         {/* SIMPLE NAME */}
        <Link to="/" className="brand-name">
          Learning Management System
        </Link>

        {/* NAV LINKS */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          {!user && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register" className="btn-primary">
                Register
              </Link>
            </>
          )}

          {user && (
            <>
              <Link
                to={`/${
                  user.role.replace("ROLE_", "").toLowerCase()
                }-dashboard`}
              >
                Dashboard
              </Link>

              <button onClick={logout} className="btn-danger">
                Logout
              </button>
            </>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;