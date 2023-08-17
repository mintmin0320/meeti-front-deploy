import React from "react";
import { Routes, Route } from "react-router-dom";

import SignInPage from "../pages/auth/SignInPage";
import SignUpPage from "../pages/auth/SignUpPage";
import SignUpTypePage from "../pages/auth/SignUpTypePage";
import SignUpCorpPage from "../pages/auth/SignUpCorpPage";

export default function AuthRoute() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/" element={<SignUpTypePage />} />
      <Route path="/personal" element={<SignUpPage />} />
      <Route path="/corp" element={<SignUpCorpPage />} />
    </Routes>
  );
}
