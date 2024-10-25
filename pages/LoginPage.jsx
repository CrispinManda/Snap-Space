// src/pages/LoginPage.jsx
import './LoginPage.css';
import { Container } from 'react-bootstrap';
import { useGoogleLogin } from "@react-oauth/google";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("Login successful:", tokenResponse);

      localStorage.setItem('token', tokenResponse.access_token);

      try {
        const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });
        const userInfo = await userInfoResponse.json();
        console.log('User Info:', userInfo);

        login(userInfo);

        console.log('Redirecting to /home');
        navigate('/home');
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    },
    onError: (error) => {
      console.error('Login Failed:', error);
    },
  });

  return (
  
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <button 
        onClick={() => {
          console.log("Attempting to login...");
          googleLogin();
        }} 
        type="button" 
        className="login-with-google-btn" 
        style={{ width: '300px' }}
      >
        Sign in with Google
      </button>
    </Container>
    
  );
}

export default LoginPage;
