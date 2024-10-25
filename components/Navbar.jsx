// src/components/Navbar.js
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

const MyNavbar = () => {
  const { user, logout } = useAuth();

  return (
    <Navbar className='bg' variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Album Manager</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
      </Nav>
      <Nav>
        {user ? (
          <>
            <span className="navbar-text me-3">
              Welcome, {user.given_name || user.name.split(" ")[0]}
            </span>
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
