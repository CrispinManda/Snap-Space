// src/pages/LoginPage.jsx
import './LoginPage.css';
import { Container,Row, Col } from 'react-bootstrap';
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
  <Col className="d-flex justify-content-center">
    <div className="card shadow mb-3"
      style={{
        width: '30rem',
        height:'450px',
        padding: '20px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Subtle shadow effect
      }} >
      <div className="card-header text-center"><h4>Welcome to Snapspace</h4></div>
      <div className="card-body text-dark">
        <p className="card-text text-center mt-3">Sign in to continue.</p>
        
        <Row className="d-flex justify-content-center">
          <button
            onClick={() => {
              console.log("Attempting to login...");
              googleLogin();
            }}
            type="button"
            className="login-with-google-btn mt-5"
            style={{ width: '100%' }}
          >
            Continue with Google
          </button>
        </Row>
      </div>
    </div>
  </Col>
</Container>




    
  );
}

export default LoginPage;
