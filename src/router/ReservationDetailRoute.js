import React from "react";
import { Routes, Route } from "react-router-dom";
import ReservationDetailPage from "../pages/ReservationDetailPage";

export default function JobRoute() {
  return (
    <Routes>
      <Route path="/" element={<ReservationDetailPage />} />
    </Routes>
  );
}