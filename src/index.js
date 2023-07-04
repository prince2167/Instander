import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { PostProvider } from "./contexts/post-context";
import { AuthProvider } from "./contexts/auth-context";
import { UserProvider } from "./contexts/user-context";
import { Toaster } from "react-hot-toast";
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: "1rem",
          right: "1rem",
          fontSize: "0.9rem",
        }}
      />
      <AuthProvider>
        <UserProvider>
          <PostProvider>
            <App />
          </PostProvider>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
