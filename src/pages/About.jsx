const About = () => {
  return (
    <div className="page-container">
      <div className="about-hero">
        <h1>Learn Without Limits</h1>
        <p>
          EduLMS is a modern multi-tenant Learning Management System designed
          to empower students, instructors, and institutions with powerful
          tools for digital education.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>🎓 Role-Based Dashboards</h3>
          <p>
            Students, instructors, and administrators get customized
            dashboards tailored to their responsibilities.
          </p>
        </div>

        <div className="about-card">
          <h3>📊 Real-Time Analytics</h3>
          <p>
            Track learning progress, course performance, and platform growth
            with built-in reporting tools.
          </p>
        </div>

        <div className="about-card">
          <h3>🔐 Secure Authentication</h3>
          <p>
            Enterprise-level authentication with role management and secure
            data handling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;