import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Sidebar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Sidebar;
