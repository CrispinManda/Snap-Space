// src/pages/LoginPage.js
// import React from 'react';
import {  Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    // Simulate successful login
    const mockUser = { name: 'John Doe', email: 'john@example.com' };
    login(mockUser);

    // Redirect to the home page after login
    navigate('/home');
  };

  return (
    <Container className="text-center mt-5">
    <h1>Login</h1>
    <button onClick={handleLogin} className="google-login-btn">
      Login with Google
    </button>
  </Container>
  );
};

export default LoginPage;
