import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const ReservationPage = lazy(() => import('../pages/reservation/ReservationPage'));
const OfficeDetailPage = lazy(() => import('../pages/reservation/OfficeDetailPage'));
const AddOfficePage = lazy(() => import('../pages/reservation/AddOfficePage'));

export default function ReservationRoute() {
  return (
    <Suspense fallback='Loading'>
      <Routes>
        <Route path="/" element={<ReservationPage />} />
        <Route path="/detail" element={<OfficeDetailPage />} />
        <Route path="/add-office" element={<AddOfficePage />} />
      </Routes>
    </Suspense>
  );
};
