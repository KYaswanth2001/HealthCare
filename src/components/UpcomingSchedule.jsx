import React from 'react';
import { upcomingAppointments } from '../data/appointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import './UpcomingSchedule.css';

function UpcomingSchedule() {
  return (
    <section className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {upcomingAppointments.map((group, idx) => (
        <div key={idx}>
          <h4>On {group.day}</h4>
          <div className="schedule-group">
            {group.items.map((item, i) => (
              <SimpleAppointmentCard key={i} {...item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default UpcomingSchedule;