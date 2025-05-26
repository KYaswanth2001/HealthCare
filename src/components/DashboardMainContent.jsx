import React from 'react';
import DashboardOverview from './DashboardOverview';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import './DashboardMainContent.css';

function DashboardMainContent() {
  return (
    <main className="dashboard-main">
      <div className="left-column">
        <DashboardOverview />
        <ActivityFeed />
      </div>
      <div className="right-column">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </main>
  );
}

export default DashboardMainContent;
