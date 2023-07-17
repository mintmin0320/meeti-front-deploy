import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MainRoute from "./router/MainRoute";
import ContactsPage from "./pages/contacts/ContactsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <MainRoute />
        <ContactsPage />
      </Router>
    </div>
  );
}

export default App;
