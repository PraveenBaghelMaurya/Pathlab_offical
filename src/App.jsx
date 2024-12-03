import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutUs from "./pages/AboutUs";
import CareersPage from "./pages/CareersPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AppointmentForm from "./pages/AppointmentForm";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/ServicesPage" element={<ServicesPage />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/CareersPage" element={<CareersPage />}></Route>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}></Route>
          <Route path="/AppointmentForm" element={<AppointmentForm />}></Route>
          <Route path="/SignupPage" element={<SignupPage />}></Route>
          <Route path="/LoginPage" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
