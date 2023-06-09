import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/LoginPage";

export default function LoginRoute() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
