import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignupTypePage";

export default function LoginRoute() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
    </Routes>
  );
}
