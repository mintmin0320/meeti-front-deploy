import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import ContainerSkeletonUI from '../common/skeletonUI/';

const ContactsPage = lazy(() => import('../pages/contact/ContactsPage'))

export default function ContactRoute() {
  return (
    <Suspense fallback={<ContainerSkeletonUI />}>
      <Routes>
        <Route path="/" element={<ContactsPage />} />
      </Routes>
    </Suspense>
  );
};
