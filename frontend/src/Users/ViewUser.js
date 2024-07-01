import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './ViewUser.css'; // Import the CSS for styling

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 form-container">
          <h2 className="form-title">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id: {user.id}
              <ul className="list-group">
                <li className="list-item">
                  <b>Name:</b> {user.name}
                </li>
                <li className="list-item">
                  <b>Username:</b> {user.username}
                </li>
                <li className="list-item">
                  <b>Email:</b> {user.email}
                </li>
              </ul>
            </div>
          </div>
          <button className="btn back-btn" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
