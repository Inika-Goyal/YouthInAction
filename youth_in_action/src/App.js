import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import User from "./User";
import SavedApplicationsPage from "./SavedApplicationsPage";
import OrgPage from "./OrgPage";

// This is where we add all our routes for our Personal Website by default, we navigate to the Landing Page
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/user" element={<User />} />
        <Route path="/orgPage" element={<OrgPage />} />
      </Routes>
    </BrowserRouter>
  );
}