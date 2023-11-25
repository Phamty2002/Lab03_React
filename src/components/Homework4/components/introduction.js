import React from 'react';

const Introduction = () => {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>React is a JavaScript library for building user interfaces. It is declarative, efficient, and flexible. React is used by many large companies, including Facebook, Instagram, and Netflix.</p>
      <p>Here are some of the benefits of using React:</p>
      <ul>
        <li>Declarative: React lets you describe what you want to see on the screen, and it will take care of updating the DOM to match.</li>
        <li>Efficient: React uses a virtual DOM to efficiently update the UI. This means that React only makes the necessary changes to the DOM, which can improve performance.</li>
        <li>Flexible: React can be used to build a variety of applications, from simple websites to complex web applications.</li>
      </ul>
      <p>If you are interested in learning more about React, I recommend visiting the official React website: <a href="https://reactjs.org/">https://reactjs.org/</a></p>
    </div>
  );
};

export default Introduction;
