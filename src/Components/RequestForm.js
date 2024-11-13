import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Request.css';  // Import request-specific styles

const RequestForm = () => {
  const [location, setLocation] = useState('');
  const [condition, setCondition] = useState('');
  const [status, setStatus] = useState('');
  const [eta, setEta] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRequest = {
      location,
      condition,
      status,
      eta,
    };

    console.log(newRequest);
    try {
      console.log(newRequest);
      const response = await axios.post('http://localhost:5000/api/requests', newRequest);
      console.log('Request submitted:', response.data);
      // Handle success (e.g., redirect or show success message)
    } catch (error) {
      console.error('Error submitting request:', error);
    }
  };

  return (
    <div className="request-container">
      <h1>Create a New Request</h1>
      <form onSubmit={handleSubmit} className="request-form">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Condition"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <input
          type="text"
          placeholder="ETA"
          value={eta}
          onChange={(e) => setEta(e.target.value)}
        />
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default RequestForm;
