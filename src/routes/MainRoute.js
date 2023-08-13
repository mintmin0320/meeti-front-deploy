import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  CalendarRoute,    // 달력
  AuthRoute,        // 인증
  ContactRoute,     // 연락처
  ReservationRoute, // 예약
  ApprovalRoute,    // 승인
  ProfileRoute,     // 프로필
  MinutesRoute      // 회의록
} from './index'

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/*" element={<CalendarRoute />} />
      <Route path="/auth/*" element={<AuthRoute />} />
      <Route path="/contact/*" element={<ContactRoute />} />
      <Route path="/reservation/*" element={<ReservationRoute />} />
      <Route path="/approval/*" element={<ApprovalRoute />} />
      <Route path="/profile/*" element={<ProfileRoute />} />
      <Route path="/minutes/*" element={<MinutesRoute />} />
    </Routes>
  );
};
