import React from "react";
import { Routes, Route } from "react-router-dom";

import SignInPage from "../pages/auth/SignInPage";
import PersonalSignUpPage from "../pages/auth/PersonalSignUpPage";
import SignUpPage from "../pages/auth/SignUpPage";
import SignUpCorpPage from "../pages/auth/SignUpCorpPage";

export default function AuthRoute() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/" element={<SignUpPage />} />
      <Route path="/personal" element={<PersonalSignUpPage />} />
      <Route path="/corp" element={<SignUpCorpPage />} />
    </Routes>
  );
}
