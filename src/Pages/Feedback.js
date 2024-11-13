// src/Pages/Feedback.js
import React, { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for backend submission
    console.log('User Feedback:', feedback);
    setFeedback('');
  };

  return (
    <div>
      <h2>Give Us Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback here..."
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
