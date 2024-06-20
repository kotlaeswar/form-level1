import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import './Form.css';
function Summary() {
  const location = useLocation();
  const formData = location.state?.formData;

  if (!formData) {
    return <Navigate to="/" />;
  }

  return (
    <div className="summary">
      <h2>Summary</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Age:</strong> {formData.age}</p>
      <p><strong>Attending with Guest:</strong> {formData.attendingWithGuest === 'yes' ? 'Yes' : 'No'}</p>
      {formData.attendingWithGuest === 'yes' && <p><strong>Guest Name:</strong> {formData.guestName}</p>}
    </div>
  );
}

export default Summary;
