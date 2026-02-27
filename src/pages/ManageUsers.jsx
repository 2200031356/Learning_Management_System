import { useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Student" },
    { id: 2, name: "Jane Smith", role: "Instructor" },
    { id: 3, name: "Admin User", role: "Admin" },
  ]);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="page-container">
      <h1>Manage Users</h1>

      {users.map((user) => (
        <div key={user.id} className="list-card">
          <h3>{user.name}</h3>
          <p>Role: {user.role}</p>
          <button className="danger" onClick={() => deleteUser(user.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageUsers;