// src/App.jsx
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Navbar component
import HomePage from '../pages/HomePage'; // Home page
import LandingPage from '../pages/LandingPage'; // Landing page
import LoginPage from '../pages/LoginPage'; // Login page
import UserDetail from '../components/UserDetail'; // User detail page
import AlbumDetail from '../components/AlbumDetail'; // Album detail page
import PhotoDetail from '../components/PhotoDetail'; // Photo detail page
import ProtectedRoute from '../components/ProtectedRoute'; // For route protection
import { AuthProvider } from '../context/AuthContext'; // Auth Context Provider
import './App.css'; // Main CSS file

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Protected Routes */}
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
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
