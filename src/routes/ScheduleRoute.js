import React from "react";
import { Routes, Route } from "react-router-dom";

import SchedulePage from "../pages/schedule/SchedulePage";
import AddSchedulePage from '../pages/schedule/AddSchedulePage';

export default function ScheduleRoute() {
  return (
    <Routes>
      <Route path="/" element={<SchedulePage />} />
      <Route path="/add-schedule" element={<AddSchedulePage />} />
    </Routes>
  );
};
