import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = () => {
  const bars = [50, 80, 40, 70, 90, 60, 30]; 

  return (
    <div className="activity-feed">
      <h3>Activity</h3>
      <p>3 appointments on this week</p>
      <div className="bar-chart">
        {bars.map((height, index) => (
          <div
            key={index}
            className="bar"
            style={{ height: `${height}px` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
