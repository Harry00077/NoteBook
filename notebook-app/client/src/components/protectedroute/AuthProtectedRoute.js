import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contextapi/AuthProvider";

function AuthProtectedRoute({ children }) {
  const [isAuthenticated] = useAuthContext();
  const token = localStorage.getItem("token");

  if (!isAuthenticated && !token) {
    return <Navigate to="/" />;
  }
  return children;
}

export default AuthProtectedRoute;
