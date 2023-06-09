import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import ApprovalPage from '../pages/approval/ApprovalPage';

export default function ApprovalRoute() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ApprovalPage />
        }
      />
    </Routes>
  );
}