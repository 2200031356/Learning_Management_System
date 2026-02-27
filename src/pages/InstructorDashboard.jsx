import { Link } from "react-router-dom";

const InstructorDashboard = () => {
  return (
    <div className="page-container">
      <h1>Instructor Dashboard</h1>
      <p>Welcome back! Manage your courses and students here.</p>

      <div className="dashboard-grid">
        <Link to="/create-course" className="card">
          <h3>Create Course</h3>
          <p>Create and publish new courses</p>
        </Link>

        <Link to="/manage-courses" className="card">
          <h3>Manage Courses</h3>
          <p>Edit or delete your courses</p>
        </Link>

        <Link to="/upload-materials" className="card">
          <h3>Upload Materials</h3>
          <p>Add videos, PDFs and assignments</p>
        </Link>

        <Link to="/grade-assignments" className="card">
          <h3>Grade Assignments</h3>
          <p>Review and grade submissions</p>
        </Link>

        <Link to="/view-enrollments" className="card">
          <h3>View Enrollments</h3>
          <p>See enrolled students</p>
        </Link>
      </div>
    </div>
  );
};

export default InstructorDashboard;