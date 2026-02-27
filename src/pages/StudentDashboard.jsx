import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div className="container">
      <h2>Student Dashboard</h2>

      <div className="grid">
        <Link to="/my-courses" className="card">
          <h3>My Courses</h3>
          <p>View enrolled courses</p>
        </Link>

        <Link to="/progress" className="card">
          <h3>Progress Tracking</h3>
          <p>Monitor your learning progress</p>
        </Link>

        <Link to="/grades" className="card">
          <h3>View Grades</h3>
          <p>Check assignment and quiz grades</p>
        </Link>

        <Link to="/notifications" className="card">
          <h3>Notifications</h3>
          <p>See latest updates</p>
        </Link>
      </div>
    </div>
  );
};

export default StudentDashboard;