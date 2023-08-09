import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/auth/SignupPage";
import SignupTypePage from "../pages/auth/SignupTypePage";
import SignupPageCorp from "../pages/auth/SignupPageCorp";

export default function LoginRoute() {
  return (
    <Routes>
      <Route path="/" element={<SignupTypePage />} />
      <Route path="/personal" element={<SignUp />} />
      <Route path="/corp" element={<SignupPageCorp />} />
    </Routes>
  );
}
