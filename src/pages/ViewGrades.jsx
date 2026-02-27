const grades = [
  { course: "React for Beginners", grade: "A" },
  { course: "Java Programming", grade: "B+" },
  { course: "Machine Learning Basics", grade: "A-" },
];

const ViewGrades = () => {
  return (
    <div className="container">
      <h2>My Grades</h2>

      <div className="grid">
        {grades.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.course}</h3>
            <p>Grade: {item.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewGrades;