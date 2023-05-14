import "./App.css";
import Main from "./components/Main";
import Calendar from "./components/MainPage/Calendar/Calendar";
import Header from "./components/MainPage/Calendar/Header";
import UserProfile from "./components/UserProfile";
import CalendarPage from "./pages/CalendarPage";

function App() {
  return (
    <div className="App">
      <CalendarPage />
    </div>
  );
}

export default App;
