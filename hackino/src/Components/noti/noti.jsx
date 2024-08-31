import React, { useState } from 'react';
import './noti.css';

const Noti = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, category: 'Club', title: 'Chess Club Meeting', message: 'The next Chess Club meeting is on Friday at 5 PM in Room 101.' },
    { id: 2, category: 'Director', title: 'Director\'s Announcement', message: 'There will be a campus-wide drill next week. Please be prepared.' },
    { id: 3, category: 'Event', title: 'Annual Sports Day', message: 'Don\'t forget to register for the Annual Sports Day event by this weekend.' },
    { id: 4, category: 'Club', title: 'Drama Club Auditions', message: 'Auditions for the Drama Club will be held on Monday at 3 PM in the Auditorium.' },
    { id: 5, category: 'General', title: 'Library Closure', message: 'The library will be closed this Thursday for maintenance. Please plan accordingly.' },
    ]);

  return (
    <div className="noti-container">
      <div className="clock-time">Notifications</div>
      <div className="notifications-list">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification">
            <h3 className="notification-title">{notification.category}: {notification.title}</h3>
            <p className="notification-message">{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noti;
