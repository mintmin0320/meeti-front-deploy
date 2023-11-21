import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import ContainerSkeletonUI from '../common/skeletonUI/';

const ApprovalPage = lazy(() => import('../pages/approval/ApprovalPage'));

export default function ApprovalRoute() {
  return (
    <Suspense fallback={<ContainerSkeletonUI />}>
      <Routes>
        <Route path="/" element={<ApprovalPage />} />
      </Routes>
    </Suspense>
  );
};
