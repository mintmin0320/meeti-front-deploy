import React from "react";
import { Routes, Route } from "react-router-dom";

import MinutesPage from '../pages/minutes/MinutesPage';

export default function MinutesRoute() {
  return (
    <Routes>
      <Route path="/" element={<MinutesPage />} />
    </Routes>
  );
};
