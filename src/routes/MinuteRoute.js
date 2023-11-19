import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const MinutesPage = lazy(() => import('../pages/minutes/MinutesPage'));

export default function MinutesRoute() {
  return (
    <Suspense fallback='Loading'>
      <Routes>
        <Route path="/" element={<MinutesPage />} />
      </Routes>
    </Suspense>
  );
};
