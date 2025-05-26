import React from 'react';
import { calendarAppointments } from '../data/appointments';
import './CalendarView.css';

function CalendarView() {
  return (
    <section className="calendar-view">
      <h3>October 2021</h3>
      <div className="calendar-grid">
        {/* Render calendar grid statically or via helper */}
        {[...Array(7)].map((_, i) => (
          <div key={i} className="calendar-day">Day {i + 25}</div>
        ))}
      </div>
      <div className="appointments">
        {calendarAppointments.map((apt, idx) => (
          <div key={idx} className="appointment-card">
            <strong>{apt.label}</strong>
            <span>{apt.time}</span>
            <small>{apt.doctor}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CalendarView;