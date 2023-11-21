import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import ContainerSkeletonUI from '../common/skeletonUI/';

const ProfilePage = lazy(() => import('../pages/profile/ProfilePage'));

export default function ProfileRoute() {
  return (
    <Suspense fallback={<ContainerSkeletonUI />}>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
      </Routes>
    </Suspense>
  );
};