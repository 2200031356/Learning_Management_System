const ViewEnrollments = () => {
  const enrollments = [
    { id: 1, student: "John Doe", course: "React Masterclass" },
    { id: 2, student: "Jane Smith", course: "Spring Boot API" },
  ];

  return (
    <div className="page-container">
      <h1>View Enrollments</h1>

      {enrollments.map((enroll) => (
        <div key={enroll.id} className="list-card">
          <p><strong>{enroll.student}</strong></p>
          <p>Enrolled in: {enroll.course}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewEnrollments;