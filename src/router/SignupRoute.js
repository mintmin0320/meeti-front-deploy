import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/auth/SignupPage";
import SignupTypePage from '../pages/auth/SignupTypePage';

export default function LoginRoute() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/type" element={<SignupTypePage />} />
    </Routes>
  );
}
