import React from 'react';

const TimelineItem = ({ date, title, description }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-date">{date}</div>
      <h3 className="timeline-item-title">{title}</h3>
      <p className="timeline-item-description">{description}</p>
    </div>
  );
};

const Timeline = () => {
  const timelineData = [
    {
      date: '2023-10-04',
      title: 'Started learning React',
      description: 'Embarked on a journey to master React, a JavaScript library for building user interfaces.',
    },
    {
      date: '2023-10-11',
      title: 'Created a simple to-do list app',
      description: 'Applied React concepts to build a functional to-do list application using React components, state management, and event handling.',
    },
    {
      date: '2023-10-18',
      title: 'Developed a responsive e-commerce website',
      description: 'Utilized React, Redux, and Node.js to create a fully functional e-commerce website with product listings, shopping cart functionality, and user authentication.',
    },
    {
      date: '2023-10-25',
      title: 'Built a real-time chat application',
      description: 'Leveraged React, Socket.io, and Node.js to construct a real-time chat application enabling seamless communication between users.',
    },
  ];

  return (
    <div className="timeline">
      <h1>My Timeline</h1>
      {timelineData.map((item) => (
        <TimelineItem key={item.date} {...item} />
      ))}
    </div>
  );
};

export default Timeline;
