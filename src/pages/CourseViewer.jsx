import { useParams, Link } from "react-router-dom";

const CourseViewer = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <h2>Course Viewer</h2>
      <p>Course ID: {id}</p>

      <div className="card">
        <h3>Lesson 1: Introduction</h3>
        <p>Video lesson content here...</p>
      </div>

      <div className="card">
        <h3>Lesson 2: Advanced Concepts</h3>
        <p>PDF and materials here...</p>
      </div>

      <Link to={`/submit-assignment/${id}`} className="btn-primary">
        Submit Assignment
      </Link>
    </div>
  );
};

export default CourseViewer;