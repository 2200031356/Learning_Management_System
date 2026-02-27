import { useState } from "react";

const CreateCourse = () => {
  const [course, setCourse] = useState({
    title: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Course Created Successfully!");
    setCourse({ title: "", description: "", category: "" });
  };

  return (
    <div className="page-container">
      <h1>Create Course</h1>

      <form onSubmit={handleSubmit} className="form-card">
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={course.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Course Description"
          value={course.description}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={course.category}
          onChange={handleChange}
          required
        />

        <button type="submit">Create Course</button>
      </form>
    </div>
  );
};

export default CreateCourse;