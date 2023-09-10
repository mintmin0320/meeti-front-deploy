import React from "react";
import { Routes, Route } from "react-router-dom";

import SchedulePage from "../pages/schedule/SchedulePage";

export default function ScheduleRoute() {
  return (
    <Routes>
      <Route path="/" element={<SchedulePage />} />
    </Routes>
  );
};
