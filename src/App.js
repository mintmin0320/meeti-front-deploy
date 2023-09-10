import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import MainRoute from "./routes/MainRoute";

const App = () => {
  return (
    <div className="App">
      <Router>
        <MainRoute />
      </Router>
    </div>
  );
}

export default App;
