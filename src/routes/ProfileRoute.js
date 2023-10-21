import React from "react";
import { Routes, Route } from "react-router-dom";

import ProfilePage from "../pages/profile/ProfilePage";

export default function ProfileRoute() {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
    </Routes>
  );
};
