import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">

      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: "linear-gradient(135deg, #4f46e5, #6366f1)",
          color: "white",
          padding: "0 20px"
        }}
      >
        <div style={{ maxWidth: "900px" }}>
          <h1 style={{ fontSize: "60px", marginBottom: "25px" }}>
            Learn Without Limits
          </h1>

          <p style={{ fontSize: "20px", marginBottom: "40px", lineHeight: "1.7" }}>
            EduLMS is a modern Learning Management System designed to help
            students, instructors, and institutions deliver powerful digital
            education experiences.
          </p>

          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/courses" className="btn-primary">
              Browse Courses
            </Link>
            <Link to="/register" className="btn-secondary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "100px 20px", textAlign: "center" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px"
          }}
        >
          <div>
            <h2 style={{ fontSize: "42px", color: "#4f46e5" }}>10K+</h2>
            <p>Active Students</p>
          </div>

          <div>
            <h2 style={{ fontSize: "42px", color: "#4f46e5" }}>250+</h2>
            <p>Expert Instructors</p>
          </div>

          <div>
            <h2 style={{ fontSize: "42px", color: "#4f46e5" }}>120+</h2>
            <p>Online Courses</p>
          </div>

          <div>
            <h2 style={{ fontSize: "42px", color: "#4f46e5" }}>98%</h2>
            <p>Completion Rate</p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ padding: "100px 20px", background: "#f8fafc", textAlign: "center" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "42px", marginBottom: "60px" }}>
            Popular Categories
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "40px"
            }}
          >
            <div>
              <h3>💻 Web Development</h3>
              <p>Frontend, Backend & Full Stack Development courses.</p>
            </div>

            <div>
              <h3>📊 Data Science</h3>
              <p>Machine Learning, AI & Data Analytics programs.</p>
            </div>

            <div>
              <h3>🎨 UI/UX Design</h3>
              <p>Design modern web & mobile user experiences.</p>
            </div>

            <div>
              <h3>📈 Business</h3>
              <p>Entrepreneurship, Marketing & Management courses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "100px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "42px", marginBottom: "60px" }}>
            Why Choose EduLMS?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "40px"
            }}
          >
            <div>
              <h3>🎓 Role-Based Dashboards</h3>
              <p>Custom dashboards for Students, Instructors & Admins.</p>
            </div>

            <div>
              <h3>📊 Progress Tracking</h3>
              <p>Monitor learning journey with visual reports.</p>
            </div>

            <div>
              <h3>🔐 Secure Platform</h3>
              <p>Safe authentication & role management system.</p>
            </div>

            <div>
              <h3>📚 Flexible Learning</h3>
              <p>Learn anytime, anywhere at your own pace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "120px 20px",
          textAlign: "center",
          background: "#4f46e5",
          color: "white"
        }}
      >
        <h2 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Start Your Learning Journey Today
        </h2>

        <p style={{ marginBottom: "40px" }}>
          Join thousands of learners building their future with EduLMS.
        </p>

        <Link to="/register" className="btn-primary">
          Join Now
        </Link>
      </section>

    </div>
  );
};

export default Home;