import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import ContainerSkeletonUI from '../common/skeletonUI/';

const SchedulePage = lazy(() => import('../pages/schedule/SchedulePage'));
const AddSchedulePage = lazy(() => import('../pages/schedule/AddSchedulePage'));

export default function ScheduleRoute() {
  return (
    <Suspense fallback={<ContainerSkeletonUI />}>
      <Routes>
        <Route path="/" element={<SchedulePage />} />
        <Route path="/add-schedule" element={<AddSchedulePage />} />
      </Routes>
    </Suspense>
  );
};