import { createContext, useContext, useEffect, useState } from "react";
import authService from "../services/authService";
import { useLocalStorage } from "../hooks";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Initialize state to false
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useLocalStorage("user", null);

  const login = async (data) => {
    const response = await authService.login(data);
    if (response.status === "success") {
      setUser(response.user);
      setIsAuthenticated(true);
    }
    return response;
  };

  const register = async (data) => {
    const response = await authService.register(data);
    if (response.status === "success") {
      setUser(response.user);
      setIsAuthenticated(true);
    }
    return response;
  };

  const logout = async () => {
    const response = await authService.logout();
    if (response.status === "success") {
      setUser(null);
      setIsAuthenticated(false);
    }
    return response;
  };

  const fetchToken = () => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
      return null;
    };

    const token = getCookie("token");

    if (token) {
      setIsAuthenticated(true); // Only set this if token exists
    } else {
      setIsAuthenticated(false);
    }
    setLoading(false);
  };

  // Fetch token only after the component mounts
  useEffect(() => {
    fetchToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, register, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
