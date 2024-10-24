// src/pages/LoginPage.js
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; // Fix: Import as a named import
import { Container } from 'react-bootstrap';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Assuming this is your custom hook for managing auth

  // Handle Google login success
  const handleLoginSuccess = (credentialResponse) => {
    try {
      // Decode the JWT token to get user details
      const decodedToken = jwtDecode(credentialResponse.credential);
      
      // Use the decoded token to log in the user
      login(decodedToken); // Assuming login saves the user info in context

      // Redirect to home page after login
      navigate('/home');
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  };

  // Handle Google login failure
  const handleLoginError = () => {
    console.log('Login Failed');
  };

  return (
    <Container className="text-center mt-5">
      <h1>Login</h1>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
      />
    </Container>
  );
};

export default LoginPage;
