import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

import MainRoute from "./routes/MainRoute";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ToastContainer />
        <MainRoute />
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
