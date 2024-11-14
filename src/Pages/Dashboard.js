import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Styles/Dashboard.css';  // Import styles specific to the dashboard

const Dashboard = () => {
  console.log("In dashboard page");
  const [user, setUser] = useState(null);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch user info and requests
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');  
        try {
          const response = await axios.get('http://localhost:5000/api/users/me', {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log(response);
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
    };

    const fetchUserRequests = async () => {
      const token = localStorage.getItem('token');
              try {
          const response = await axios.get('http://localhost:5000/api/requests', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setRequests(response.data);
        } catch (error) {
          console.error('Error fetching requests:', error);
        }
      }

    fetchUserData();
    fetchUserRequests();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard</h1>
      
      {user ? (
        <div>
          <h2>Hello, {user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Medical Info: {user.medicalInfo}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}

      <h2>Your Requests</h2>
      {requests.length > 0 ? (
        <ul>
          {requests.map((request) => (
            <li key={request._id}>
              <p><strong>Location:</strong> {request.location}</p>
              <p><strong>Condition:</strong> {request.condition}</p>
              <p><strong>Status:</strong> {request.status}</p>
              <p><strong>ETA:</strong> {request.eta || 'N/A'}</p>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>You have no requests at the moment.</p>
      )}

      <div className="dashboard-buttons">
        <Link to="/Profile">
          <button className="dashboard-button">Go to Profile</button>
        </Link>
        <Link to="/Request">
          <button className="dashboard-button">Create New Request</button>
        </Link>
        <Link to="/EmergencyContact">
          <button className="dashboard-button">Emergency Contacts</button>
        </Link>
        <Link to="/Feedback">
          <button className="dashboard-button">Feedback</button>
        </Link>
        <Link to="/add-user">
          <button className="add-user-button">Add User</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

