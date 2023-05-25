import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Calendar } from "rsuite";
import CalendarPage from "../pages/CalendarPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  );
};
