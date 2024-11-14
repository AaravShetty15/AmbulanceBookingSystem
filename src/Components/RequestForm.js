import React, { useState } from 'react';
import axios from 'axios';
//import '../Styles/Request.css';  // Import request-specific styles

const RequestForm = () => {
  const [location, setLocation] = useState('');
  const [condition, setCondition] = useState('');
  const [status, setStatus] = useState('');
  const [eta, setEta] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRequest = {
      location,
      condition,
      status,
      eta,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/requests', newRequest);
      console.log('Request submitted:', response.data);
      setSuccessMessage('Request submitted successfully!');
      setErrorMessage('');  // Clear any previous error messages
      // Reset form fields
      setLocation('');
      setCondition('');
      setStatus('');
      setEta('');
    } catch (error) {
      console.error('Error submitting request:', error);
      setErrorMessage('Error submitting request. Please try again.');
      setSuccessMessage('');  // Clear any previous success messages
    }
  };

  return (
    <div className="request-container">
      
      {/* Success and Error Messages */}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-error">{errorMessage}</div>}
      
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