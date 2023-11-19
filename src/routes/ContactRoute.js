import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const ContactsPage = lazy(() => import('../pages/contact/ContactsPage'))

export default function ContactRoute() {
  return (
    <Suspense fallback='Loading'>
      <Routes>
        <Route path="/" element={<ContactsPage />} />
      </Routes>
    </Suspense>
  );
};
