import React from "react";
import { Routes, Route } from "react-router-dom";

import ContactsPage from "../pages/contact/ContactsPage";

export default function ContactRoute() {
  return (
    <Routes>
      <Route path="/" element={<ContactsPage />} />
    </Routes>
  );
};
