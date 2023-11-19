import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const ProfilePage = lazy(() => import('../pages/profile/ProfilePage'));

export default function ProfileRoute() {
  return (
    <Suspense fallback='Loading'>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
      </Routes>
    </Suspense>
  );
};