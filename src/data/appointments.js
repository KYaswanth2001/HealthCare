import eyeIcon from '../assets/eye.png';
import heartIcon from '../assets/heart.png';
import brainIcon from '../assets/brain.png';
import checkIcon from '../assets/check-square.png';

export const calendarAppointments = [
  { day: 26, time: '09:00', label: 'Dentist', doctor: 'Dr. Cameron Williamson' },
  { day: 28, time: '11:00', label: 'Physiotherapy Appointment', doctor: 'Dr. Kevin Djones' },
];

export const upcomingAppointments = [
  {
    day: 'Thursday',
    items: [
      { title: 'Health checkup complete', time: '11:00 AM', icon: checkIcon },
      { title: 'Ophthalmologist', time: '14:00 PM', icon: eyeIcon },
    ],
  },
  {
    day: 'Saturday',
    items: [
      { title: 'Cardiologist', time: '12:00 AM', icon: heartIcon },
      { title: 'Neurologist', time: '16:00 PM', icon: brainIcon },
    ],
  },
];
