// src/components/AddUser.js
import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
  const [userData, setUserData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/add', userData);
      console.log('User added:', response.data);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={userData.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="phone" value={userData.phone} onChange={handleChange} placeholder="Phone" required />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
