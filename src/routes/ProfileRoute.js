import React from "react";
import { Routes, Route } from "react-router-dom";

import ProfilePage from "../pages/profile/ProfilePage";
import ProfileEditPage from "../pages/profile/ProfileEditPage";

export default function ProfileRoute() {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
      <Route path="/edit" element={<ProfileEditPage />} />
    </Routes>
  );
};
