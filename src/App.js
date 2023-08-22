import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MainRoute from "./router/MainRoute";
import ContactsPage from "./pages/contacts/ContactsPage";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <Router>
        <Map />
        <MainRoute />
      </Router>
    </div>
  );
}

export default App;
