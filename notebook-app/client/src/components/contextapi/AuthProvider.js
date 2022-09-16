import React, { createContext, useContext, useState } from "react";

const createAuthStateContext = createContext(undefined);
const createAuthDispatchContext = createContext(undefined);

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthChange = (isAuthenticated) => {
    setIsAuthenticated(isAuthenticated);
  };

  return (
    <createAuthStateContext.Provider value={isAuthenticated}>
      <createAuthDispatchContext.Provider value={{ handleAuthChange }}>
        {children}
      </createAuthDispatchContext.Provider>
    </createAuthStateContext.Provider>
  );
}

const useCreateAuthStateContext = () => {
  const context = useContext(createAuthStateContext);

  if (context === undefined) {
    throw Error("Errorrrr....");
  }

  return context;
};

const useCreateAuthDispatchContext = () => {
  const context = useContext(createAuthDispatchContext);

  if (context === undefined) {
    throw Error("Errorrrr....");
  }

  return context;
};

const useAuthContext = () => {
  return [useCreateAuthStateContext(), useCreateAuthDispatchContext()];
};

export {
  AuthProvider,
  useCreateAuthStateContext,
  useCreateAuthDispatchContext,
  useAuthContext,
};
