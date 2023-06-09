import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import CalendarPage from '../pages/calendar/CalendarPage';

export default function CalendarRoute() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <CalendarPage />
        }
      />
    </Routes>
  );
}