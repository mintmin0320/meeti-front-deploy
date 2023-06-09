import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import ReservationPage from '../pages/reservation/ReservationPage';

export default function JobRoute() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ReservationPage />
        }
      />
    </Routes>
  );
}