import React from "react";

const CreateAuthStateContext = React.createContext(undefined);
const CreateAuthDispatchContext = React.createContext(undefined);

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
}
