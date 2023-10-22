import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  ScheduleRoute,    // 일정
  AuthRoute,        // 인증
  ContactRoute,     // 연락처
  ReservationRoute, // 예약
  ApprovalRoute,    // 승인
  ProfileRoute,     // 프로필
  MinutesRoute,      // 회의록
  PrivateRoute,
  PublicOnlyRoute
} from './index'

export default function MainRoute() {
  return (
    <Routes>
      <Route
        path="/auth/*"
        element={<PublicOnlyRoute><AuthRoute /></PublicOnlyRoute>}
      />
      <Route
        path="/*"
        element={<PrivateRoute><ScheduleRoute /></PrivateRoute>}
      />
      <Route
        path="/contact/*"
        element={<PrivateRoute><ContactRoute /></PrivateRoute>}
      />
      <Route
        path="/reservation/*"
        element={<PrivateRoute><ReservationRoute /></PrivateRoute>}
      />
      <Route
        path="/approval/*"
        element={<PrivateRoute><ApprovalRoute /></PrivateRoute>}
      />
      <Route
        path="/profile/*"
        element={<PrivateRoute><ProfileRoute /></PrivateRoute>}
      />
      <Route
        path="/minutes/*"
        element={<PrivateRoute><MinutesRoute /></PrivateRoute>}
      />
    </Routes>
  );
};
