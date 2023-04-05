import "./App.css";
import Calendar from "./components/MainPage/Calendar";
import Header from "./components/MainPage/Header";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="App">
      <Header />
      <UserProfile />
    </div>
  );
}

export default App;
