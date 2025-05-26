import React from 'react';
import './SimpleAppointmentCard.css';

function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className="appointment-card-simple">
      <img src={icon} alt="" className="icon-image" />
      <div>
        <strong>{title}</strong>
        <p>{time}</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;
