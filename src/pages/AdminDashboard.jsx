import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="page-container">
      <h1>Admin Dashboard</h1>
      <p>Manage platform users, roles, and analytics.</p>

      <div className="dashboard-grid">
        <Link to="/manage-users" className="card">
          <h3>Manage Users</h3>
          <p>View, edit or remove users</p>
        </Link>

        <Link to="/role-management" className="card">
          <h3>Role Management</h3>
          <p>Assign roles to users</p>
        </Link>

        <Link to="/platform-analytics" className="card">
          <h3>Platform Analytics</h3>
          <p>View system statistics</p>
        </Link>

        <Link to="/reports" className="card">
          <h3>Reports</h3>
          <p>Generate platform reports</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;