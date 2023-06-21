import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import ReservationPage from '../pages/reservation/ReservationPage';
import ReservationDetailPage from '../pages/reservation/ReservationDetailPage';

export default function JobRoute() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ReservationPage />
        }
      />
      <Route
        path="/detail"
        element={
          <ReservationDetailPage />
        }
      />
    </Routes>
  );
}