import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailsPage = () => {
  const location = useLocation();
  const { state } = location; // Assuming you passed the form data as state when navigating

  return (
    <div>
      <h1>Submission Details</h1>
      <ul>
        {state && Object.entries(state).map(([key, value]) => (
          <li key={key}><strong>{key}:</strong> {value}</li>
        ))}
      </ul>
    </div>
  );
};

export default DetailsPage;
