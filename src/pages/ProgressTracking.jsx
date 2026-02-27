const progressData = [
  { course: "React for Beginners", progress: 80 },
  { course: "Java Programming", progress: 60 },
  { course: "Machine Learning Basics", progress: 45 },
];

const ProgressTracking = () => {
  return (
    <div className="container">
      <h2>Progress Tracking</h2>

      {progressData.map((item, index) => (
        <div key={index} className="card">
          <h3>{item.course}</h3>
          <div style={{ background: "#e5e7eb", borderRadius: "6px" }}>
            <div
              style={{
                width: `${item.progress}%`,
                background: "#4f46e5",
                padding: "8px",
                borderRadius: "6px",
                color: "white",
                textAlign: "center",
              }}
            >
              {item.progress}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressTracking;