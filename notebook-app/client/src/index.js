import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/contextapi/AuthProvider";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
