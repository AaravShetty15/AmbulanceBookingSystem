import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/Profile.css';  // Import profile-specific styles

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
        try {
          const response = await axios.get('http://localhost:5000/api/users/me', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
    };

    fetchUserData();
  }, []);

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      
      {user ? (
        <div className="profile-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Medical Info:</strong> {user.medicalInfo}</p>
        </div>
      ) : (
        <p>Loading your profile...</p>
      )}
    </div>
  );
};

export default Profile;