import { createContext, useContext, useEffect, useState } from "react";
import authService from "../services/authService";
import { useLocalStorage } from "../hooks";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useLocalStorage("user", null);

    const login = async (data) => {
        const response = await authService.login(data);
        if (response.status === "success") {
            setUser(response.user);
            setIsAuthenticated(true);
        }
        return response;
    }

    const register = async (data) => {
        const response = await authService.register(data);
        if (response.status === "success") {
            setUser(response.user);
            setIsAuthenticated(true);
        }
        return response;
    }

    const logout = async () => {
        const response = await authService.logout();
        if (response.status === "success") {
            setUser(null);
            setIsAuthenticated(false);
        }
        return response;
    }

  useEffect(() => {
    const fetchToken = async () => {
      const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
        return null;
      };

      const token = getCookie("token");
      if (token) {
        setIsAuthenticated(true);
        console.log("Token found");
      } else {
        setIsAuthenticated(false);
      }
    };

    fetchToken();
  }, []);


    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}


