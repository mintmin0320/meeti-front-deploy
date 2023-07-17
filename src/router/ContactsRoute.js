import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactsPage from "../pages/contacts/ContactsPage";

export default function CalendarRoute() {
  return (
    <Routes>
      <Route path="/" element={<ContactsPage />} />
    </Routes>
  );
}
