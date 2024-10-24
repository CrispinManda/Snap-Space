// src/context/AuthContext.js
import  { createContext, useState, useContext } from 'react';

// Create the context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap the app and provide auth state
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track auth state
  const [user, setUser] = useState(null);

  // Function to log in (this would include actual login logic)
  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  // Function to log out
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
