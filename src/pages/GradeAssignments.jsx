const GradeAssignments = () => {
  const submissions = [
    { id: 1, student: "John Doe", assignment: "React Project" },
    { id: 2, student: "Jane Smith", assignment: "API Design" },
  ];

  return (
    <div className="page-container">
      <h1>Grade Assignments</h1>

      {submissions.map((sub) => (
        <div key={sub.id} className="list-card">
          <p><strong>{sub.student}</strong></p>
          <p>{sub.assignment}</p>
          <input type="number" placeholder="Enter Grade" />
          <button>Submit Grade</button>
        </div>
      ))}
    </div>
  );
};

export default GradeAssignments;