import React from 'react';
import { healthCards } from '../data/healthData';
import './HealthStatusCards.css';

function HealthStatusCards() {
  return (
    <div className="health-cards">
      {healthCards.map((card, idx) => (
        <div key={idx} className="card">
          <img src={card.image} alt={card.label} className="health-icon" />
          <h4>{card.label}</h4>
          <p>{card.date}</p>
          <div className={`status-bar ${card.status}`} />
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;
