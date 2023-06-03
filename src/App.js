import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import Calendar from "./components/MainPage/Calendar/Calendar";
import Header from "./components/MainPage/Calendar/Header";
import UserProfile from "./components/UserProfile";
import ApprovalPage from "./pages/ApprovalPage";
import CalendarPage from "./pages/CalendarPage";
import ReservationPage from "./pages/ReservationPage";
import MainRoute from "./router/MainRoute";
import SignupForm from "./components/User/SignupForm";
import Login from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <MainRoute />
      </Router>
    </div>
  );
}

export default App;
