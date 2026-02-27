import { useParams } from "react-router-dom";

const SubmitAssignment = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <h2>Submit Assignment</h2>
      <p>Course ID: {id}</p>

      <form className="form">
        <input type="file" required />
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitAssignment;