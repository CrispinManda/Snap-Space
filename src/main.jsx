import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="1009789889151-fclkfodpu8b196uvii57o0k6jim1a5m7.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>;
  </StrictMode>,
)
