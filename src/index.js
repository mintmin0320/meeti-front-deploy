import React from "react";
import ReactDOM from "react-dom/client";
import axios from 'axios';

import Providers from './hooks/context/Providers';

import App from "./App";
import { postRefreshToken } from './api/auth'

const BASE_URL = `${process.env.REACT_APP_SERVER_URL}`;
axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
}, error => {
  console.error('Request error:', error);

  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  return response;
}, async error => {
  const originalRequest = error.config;
  if (error.response.status === 401) {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        localStorage.setItem('accessToken', refreshToken);

        const data = await postRefreshToken();
        const newAccessToken = data.accessToken;

        localStorage.setItem('accessToken', newAccessToken);
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        return axios(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userId");

        window.location = '/auth/sign-in';

        return Promise.reject(refreshError);
      }
    }
  }
  return Promise.reject(error);
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Providers>
    <App />
  </Providers>
);