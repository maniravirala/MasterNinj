import { createContext, useContext, useEffect, useState } from "react";
import authService from "@/services/authService";
import { useLocalStorage } from "@/hooks";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false); // Initialize state to false
  const [isStudent, setIsStudent] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useLocalStorage("user", null);

  const login = async (data) => {
    const response = await authService.login(data);
    if (response.status === "success") {
      setUser(response.user);
      localStorage.setItem("token", response.token);
      setIsStudent(response.user.role === "student");
      setIsAuthenticated(true);
    }
    return response;
  };

  const register = async (data) => {
    const response = await authService.register(data);
    if (response.status === "success") {
      setUser(response.user);
      localStorage.setItem("token", response.token);
      setIsStudent(response.user.role === "student");
      setIsAuthenticated(true);
    }
    return response;
  };

  const logout = async () => {
    const response = await authService.logout();
    if (response.status === "success") {
      setUser(null);
      localStorage.removeItem("token");
      setIsStudent(false);
      setIsAuthenticated(false);
    }
    return response;
  };

  const fetchAuthenticated = () => {
    setLoading(true);
    setIsStudent(user?.role === "student");
    setLoading(false);
  };

  // Fetch token only after the component mounts
  useEffect(() => {
    fetchAuthenticated();
  }, []);

  const isAuthenticated = () => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
      return null;
    };

    const token = getCookie('token') || localStorage.getItem('token');
    
    return !!token;
  }


  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isStudent, user, login, register, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
