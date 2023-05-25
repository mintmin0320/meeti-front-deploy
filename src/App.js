import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from "./components/Main";
import Calendar from "./components/MainPage/Calendar/Calendar";
import Header from "./components/MainPage/Calendar/Header";
import UserProfile from "./components/UserProfile";
import ApprovalPage from "./pages/ApprovalPage";
import CalendarPage from "./pages/CalendarPage";
import ReservationPage from "./pages/ReservationPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <CalendarPage />
            }
          />
          <Route
            path="/approval"
            element={
              <ApprovalPage />
            }
          />
          <Route
            path="/reservation"
            element={
              <ReservationPage />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
