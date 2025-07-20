// src/pages/Users.jsx
import React from "react";


const Users = () => {
  const users = [
    { name: "Abinash", email: "abinash@example.com", role: "Admin", lastLogin: "2025-07-19" },
    { name: "Riya", email: "riya@example.com", role: "Customer", lastLogin: "2025-07-18" },
    { name: "Rohan", email: "rohan@example.com", role: "Customer", lastLogin: "2025-07-16" },
  ];

  return (
    <div className="users-page">
      <h2>User Management</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Last Login</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <span className={`role ${user.role.toLowerCase()}`}>
                  {user.role}
                </span>
              </td>
              <td>{user.lastLogin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
