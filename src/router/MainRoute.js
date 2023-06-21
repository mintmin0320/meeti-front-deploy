import React from "react";
import { Routes, Route } from "react-router-dom";
// 개발자
import CalendarRoute from "./CalendarRoute"; // 캘린더 Route
import ApprovalRoute from "./ApprovalRoute"; //  승인 Route
import ReservationRoute from "./ReservationRoute"; // 예약 Route
import LoginRoute from "./LoginRoute"; //로그인 Route
import SignupRoute from "./SignupRoute";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<LoginRoute />} />
      <Route path="/signup/*" element={<SignupRoute />} />
      <Route path="/calendar/*" element={<CalendarRoute />} />
      <Route path="/approval/*" element={<ApprovalRoute />} />
      <Route path="/reservation/*" element={<ReservationRoute />} />
    </Routes>
  );
}
