import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const SchedulePage = lazy(() => import('../pages/schedule/SchedulePage'));
const AddSchedulePage = lazy(() => import('../pages/schedule/AddSchedulePage'));

export default function ScheduleRoute() {
  return (
    <Suspense fallback='Loading'>
      <Routes>
        <Route path="/" element={<SchedulePage />} />
        <Route path="/add-schedule" element={<AddSchedulePage />} />
      </Routes>
    </Suspense>
  );
};