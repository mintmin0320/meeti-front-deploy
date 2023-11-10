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
        // element={<PublicOnlyRoute><AuthRoute /></PublicOnlyRoute>}
        element={<AuthRoute />}
      />
      <Route
        path="/*"
        // element={<PrivateRoute><ScheduleRoute /></PrivateRoute>}
        element={<ScheduleRoute />}
      />
      <Route
        path="/contact/*"
        // element={<PrivateRoute><ContactRoute /></PrivateRoute>}
        element={<ContactRoute />}
      />
      <Route
        path="/reservation/*"
        // element={<PrivateRoute><ReservationRoute /></PrivateRoute>}
        element={<ReservationRoute />}
      />
      <Route
        path="/approval/*"
        // element={<PrivateRoute><ApprovalRoute /></PrivateRoute>}
        element={<ApprovalRoute />}
      />
      <Route
        path="/profile/*"
        // element={<PrivateRoute><ProfileRoute /></PrivateRoute>}
        element={<ProfileRoute />}
      />
      <Route
        path="/minutes/*"
        // element={<PrivateRoute><MinutesRoute /></PrivateRoute>}
        element={<MinutesRoute />}
      />
    </Routes>
  );
};
