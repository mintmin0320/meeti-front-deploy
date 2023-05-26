import "./App.css";
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
      {/* <CalendarPage /> */}
      {/* <ReservationPage /> */}
      <ApprovalPage />
    </div>
  );
}

export default App;
