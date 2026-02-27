const ManageCourses = () => {
  const courses = [
    { id: 1, title: "React Masterclass" },
    { id: 2, title: "Spring Boot API Development" },
  ];

  return (
    <div className="page-container">
      <h1>Manage Courses</h1>

      {courses.map((course) => (
        <div key={course.id} className="list-card">
          <h3>{course.title}</h3>
          <button>Edit</button>
          <button className="danger">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageCourses;