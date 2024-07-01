import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AddUser.css'; // Import the CSS for styling

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="form-title">Register User</h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your e-mail address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn submit-btn">
            Submit
          </button>
          <button type="button" className="btn cancel-btn" onClick={() => navigate("/")}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
