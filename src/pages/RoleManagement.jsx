import { useState } from "react";

const RoleManagement = () => {
  const [userRole, setUserRole] = useState("");

  const handleAssign = () => {
    alert(`Role assigned: ${userRole}`);
    setUserRole("");
  };

  return (
    <div className="page-container">
      <h1>Role Management</h1>

      <div className="form-card">
        <input
          type="text"
          placeholder="Enter Username"
        />

        <select
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option>Student</option>
          <option>Instructor</option>
          <option>Admin</option>
        </select>

        <button onClick={handleAssign}>Assign Role</button>
      </div>
    </div>
  );
};

export default RoleManagement;