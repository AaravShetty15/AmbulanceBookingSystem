import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
  const [userData, setUserData] = useState({ name: '', email: '', phone: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/add', userData);
      console.log('User added:', response.data);
      setSuccessMessage('User added successfully!');
      setErrorMessage('');  // Clear any previous error message
      // Reset form fields
      setUserData({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error('Error adding user:', error);
      setErrorMessage('Error adding user. Please try again.');
      setSuccessMessage('');  // Clear any previous success message
    }
  };

  return (
    <div className="add-user-container">
      <h1>Add New User</h1>

      {/* Success and Error Messages */}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-error">{errorMessage}</div>}
      
      <form onSubmit={handleSubmit} className="add-user-form">
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
