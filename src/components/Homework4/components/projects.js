import React from 'react';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'To-Do List App',
      description: 'A simple to-do list application built with React and Redux.',
      image: 'https://via.placeholder.com/200x150',
      link: 'https://github.com/example/todo-list-app',
    },
    {
      title: 'E-commerce Website',
      description: 'A fully functional e-commerce website built with React, Redux, and Node.js.',
      image: 'https://via.placeholder.com/200x150',
      link: 'https://github.com/example/ecommerce-website',
    },
    {
      title: 'Chat Application',
      description: 'A real-time chat application built with React, Socket.io, and Node.js.',
      image: 'https://via.placeholder.com/200x150',
      link: 'https://github.com/example/chat-application',
    },
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
