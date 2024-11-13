import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RequestStatus = ({ requestId }) => {
  const [status, setStatus] = useState('');
  const [eta, setEta] = useState('');

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await axios.get(`/api/request-status/${requestId}`);
        setStatus(response.data.status);
        setEta(response.data.eta);
      } catch (err) {
        console.error('Error fetching status:', err);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 5000); // Fetch every 5 seconds
    return () => clearInterval(interval);  // Cleanup interval on unmount
  }, [requestId]);

  return (
    <div>
      <h3>Status: {status}</h3>
      <p>Estimated Arrival Time: {eta}</p>
    </div>
  );
};

export default RequestStatus;
