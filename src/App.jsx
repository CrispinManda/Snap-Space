import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
//import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import UserDetail from '../components/UserDetail';
import AlbumDetail from '../components/AlbumDetail';
import PhotoDetail from '../components/PhotoDetail';
import ProtectedRoute from '../components/ProtectedRoute';
import { AuthProvider } from '../context/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user/:id"
              element={
                <ProtectedRoute>
                  <UserDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/album/:id"
              element={
                <ProtectedRoute>
                  <AlbumDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/photo/:id"
              element={
                <ProtectedRoute>
                  <PhotoDetail />
                </ProtectedRoute>
              }
            />
          </Routes>
          {/* <Footer />  */}
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
