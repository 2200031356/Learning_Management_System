const PlatformAnalytics = () => {
  const stats = {
    totalUsers: 120,
    totalCourses: 35,
    totalEnrollments: 560,
  };

  return (
    <div className="page-container">
      <h1>Platform Analytics</h1>

      <div className="dashboard-grid">
        <div className="card">
          <h2>{stats.totalUsers}</h2>
          <p>Total Users</p>
        </div>

        <div className="card">
          <h2>{stats.totalCourses}</h2>
          <p>Total Courses</p>
        </div>

        <div className="card">
          <h2>{stats.totalEnrollments}</h2>
          <p>Total Enrollments</p>
        </div>
      </div>
    </div>
  );
};

export default PlatformAnalytics;