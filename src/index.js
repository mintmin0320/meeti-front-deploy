import React from "react";
import ReactDOM from "react-dom/client";

import { ColorProvider } from './hooks/context/colorContext';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ColorProvider>
    <App />
  </ColorProvider>
);