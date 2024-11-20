import React, { useState } from "react";

export default function FormHandling() {
  
    const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    isSubscribe: false,
    role: ""
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="App">
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="isSubscribe">Subscribe</label>
            <input
              type="checkbox"
              id="isSubscribe"
              name="isSubscribe"
              checked={formData.isSubscribe}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="guest">Guest</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
