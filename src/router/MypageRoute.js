import React from "react";
import { Routes, Route } from "react-router-dom";
import MyPage from "../pages/auth/MyPage";
import MyPageModify from "../pages/auth/MyPageModify";

export default function MypageRoute() {
  return (
    <Routes>
      <Route path="/" element={<MyPage />} />
      <Route path="/modify" element={<MyPageModify />} />
    </Routes>
  );
}
