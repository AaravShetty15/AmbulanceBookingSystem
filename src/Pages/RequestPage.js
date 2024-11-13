import React from 'react';
import RequestForm from '../Components/RequestForm';  // Import the RequestForm component
import '../Styles/Request.css';  // Import any necessary styles

const RequestPage = () => {
  return (
    <div className="request-container">
      <h1>Create a New Request</h1>
      {/* Render the RequestForm component */}
      <RequestForm />
    </div>
  );
};

export default RequestPage;
