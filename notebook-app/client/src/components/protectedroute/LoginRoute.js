import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contextapi/AuthProvider";

function LoginRoute({ children }) {
  const [isAuthenticated] = useAuthContext();
  const token = localStorage.getItem("token");

  if (isAuthenticated && token) {
    return <Navigate to="/mynotes" />;
  }
  return children;
}

export default LoginRoute;
