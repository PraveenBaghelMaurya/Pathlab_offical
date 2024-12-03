import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  // <Auth0Provider
  //   domain="dev-wztu5trhnebganpa.us.auth0.com"
  //   clientId="VIn7BZawvblvQR7BTW9yLmCKsdITMwz5"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin,
  //   }}
  // >
  // <BrowserRouter>
  <App />
  // </BrowserRouter>
  // </Auth0Provider>
);
