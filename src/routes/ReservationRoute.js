import React from "react";
import { Routes, Route } from "react-router-dom";

import ReservationPage from '../pages/reservation/ReservationPage';
import OfficeDetailPage from '../pages/reservation/OfficeDetailPage';
import AddOfficePage from '../pages/reservation/AddOfficePage';

export default function ReservationRoute() {
  return (
    <Routes>
      <Route path="/" element={<ReservationPage />} />
      <Route path="/detail" element={<OfficeDetailPage />} />
      <Route path="/add-office" element={<AddOfficePage />} />
    </Routes>
  );
};