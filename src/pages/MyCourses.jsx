import { Link } from "react-router-dom";

const enrolledCourses = [
  { id: 1, title: "React for Beginners" },
  { id: 3, title: "Java Programming" },
  { id: 6, title: "Machine Learning Basics" },
];

const MyCourses = () => {
  return (
    <div className="container">
      <h2>My Courses</h2>

      <div className="grid">
        {enrolledCourses.map((course) => (
          <div key={course.id} className="card">
            <h3>{course.title}</h3>
            <Link to={`/course-viewer/${course.id}`} className="btn-primary">
              Open Course
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;