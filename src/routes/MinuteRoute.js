import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import ContainerSkeletonUI from '../common/skeletonUI/';

const MinutesPage = lazy(() => import('../pages/minutes/MinutesPage'));

export default function MinutesRoute() {
  return (
    <Suspense fallback={<ContainerSkeletonUI />}>
      <Routes>
        <Route path="/" element={<MinutesPage />} />
      </Routes>
    </Suspense>
  );
};
