import React from "react";
import { Routes, Route } from "react-router-dom";
import MyPage from "../pages/auth/MyPage";

export default function MypageRoute() {
  return (
    <Routes>
      <Route path="/" element={<MyPage />} />
    </Routes>
  );
}
