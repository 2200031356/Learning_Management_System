import { Link } from "react-router-dom";

const dummyCourses = [
  { id: 1, title: "React for Beginners", instructor: "John Doe" },
  { id: 2, title: "Spring Boot Mastery", instructor: "Jane Smith" },
  { id: 3, title: "Java Programming", instructor: "Michael Brown" },
  { id: 4, title: "Python for Data Science", instructor: "Emily Davis" },
  { id: 5, title: "UI/UX Design Fundamentals", instructor: "Sarah Wilson" },
  { id: 6, title: "Machine Learning Basics", instructor: "David Lee" },
  { id: 7, title: "Full Stack Web Development", instructor: "Chris Taylor" },
  { id: 8, title: "Cyber Security Essentials", instructor: "Olivia Martinez" },
];

const Courses = () => {
  return (
    <div className="container">
      <h2>All Courses</h2>

      <div className="grid">
        {dummyCourses.map((course) => (
          <div key={course.id} className="card">
            <h3>{course.title}</h3>
            <p>Instructor: {course.instructor}</p>
            <Link to={`/courses/${course.id}`} className="btn-primary">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;