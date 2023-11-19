import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const ApprovalPage = lazy(() => import('../pages/approval/ApprovalPage'));

export default function ApprovalRoute() {
  return (
    <Suspense fallback='Loading'>
      <Routes>
        <Route path="/" element={<ApprovalPage />} />
      </Routes>
    </Suspense>
  );
};
