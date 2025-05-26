import React from 'react';
import anatomy from '../assets/anatomy.png';
import './AnatomySection.css';
import { anatomyStatus } from '../data/healthData';

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <img src={anatomy} alt="Human Anatomy" />
      {anatomyStatus.map((status, idx) => (
        <span key={idx} className={`status-tag ${status.color}`}>{status.label}</span>
      ))}
    </div>
  );
}

export default AnatomySection;
