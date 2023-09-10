import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from 'axios';

import Providers from './hooks/context/Providers';

const BASE_URL = `http://${process.env.REACT_APP_SERVER_URI}`;

// 요청 인터셉터 설정: 매번 요청 전에 헤더에 accessToken 추가
axios.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers['Authorization'] = 'Bearer ' + accessToken;
  }
  return config;
});

// 응답 인터셉터 설정: 401 응답을 받았을 때 refreshToken 사용
axios.interceptors.response.use(response => {
  return response;
}, async error => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    const refreshToken = localStorage.getItem('refreshToken');

    const res = await axios.post(`${BASE_URL}/refresh-token-endpoint`, { refreshToken });
    const newAccessToken = res.data.accessToken;

    localStorage.setItem('accessToken', newAccessToken);
    originalRequest.headers['Authorization'] = 'Bearer ' + newAccessToken;

    return axios(originalRequest);
  }
  return Promise.reject(error);
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Providers>
    <App />
  </Providers>
);
