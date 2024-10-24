// src/components/Navbar.js
// import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

const MyNavbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Navbar bg='dark' variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Album Manager</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        {isAuthenticated ? (
          <>
            <Button variant="outline-light" onClick={logout}>Logout</Button>
          </>
        ) : (
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
};

export default MyNavbar;
