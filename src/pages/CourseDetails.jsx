import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <h2>Course Details</h2>
      <p>Course ID: {id}</p>
      <p>
        This course provides comprehensive lessons, assignments, and quizzes
        designed to enhance your skills.
      </p>
      <button className="btn-primary">Enroll Now</button>
    </div>
  );
};

export default CourseDetails;