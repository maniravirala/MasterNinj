import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated);
  const location = useLocation();
  console.log("PrivateRoute isAuthenticated:", isAuthenticated);

  useEffect(() => {
    setIsLoggedIn(isAuthenticated);
    console.log("PrivateRoute isAuthenticated inside useEffect:", isAuthenticated);
  }, [isAuthenticated]);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return children;
}

export default PrivateRoute;
