import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import MainRoute from "./routes/MainRoute";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <MainRoute />
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
