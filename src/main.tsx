import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";
// import { SocketContextProvider } from "./context/SocketContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        {/* <SocketContextProvider> */}
          <App />
        {/* </SocketContextProvider> */}
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
