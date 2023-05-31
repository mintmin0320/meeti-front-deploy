import React from "react";
import { Routes, Route } from "react-router-dom";
import ReservationTimePage from "../pages/ReservationTimePage";

export default function ReservationTimeRoute() {
  return (
    <Routes>
      <Route path="/" element={<ReservationTimePage />} />
    </Routes>
  );
}
