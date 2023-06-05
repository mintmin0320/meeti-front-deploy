import React from "react";
import { Routes, Route } from "react-router-dom";
// 개발자
import CalendarRoute from "./CalendarRoute"; // 캘린더 Route
import ApprovalRoute from "./ApprovalRoute"; //  승인 Route
import ReservationRoute from "./ReservationRoute"; // 예약 Route
import ReservationDetailRoute from "./ReservationDetailRoute"; //예약 상세 Route
import LoginRoute from "./LoginRoute"; //로그인 Route
import SignupTypeRoute from "./SignupTypeRoute"; //로그인 Route
import SignupRoute from "./SignupRoute";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<LoginRoute />} />
      <Route path="/SignupType" element={<SignupTypeRoute />} />
      <Route path="/Signup" element={<SignupRoute />} />
      <Route path="/calendar" element={<CalendarRoute />} />

      <Route path="/*" element={<CalendarRoute />} />
      <Route path="/approval/*" element={<ApprovalRoute />} />
      <Route path="/reservation/*" element={<ReservationRoute />} />
      <Route path="/reservationdetail/*" element={<ReservationDetailRoute />} />
    </Routes>
  );
}
